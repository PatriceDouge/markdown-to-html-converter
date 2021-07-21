export default class MarkdownConverter {

    /**
     * Converts Markdown text to HTML using regular expressions.
     * 
     * @param {string} markdownText 
     * @returns {string} Converted Markdown Result as a string of HTML elements
     */
    static convertMarkdownToHtml(markdownText) {
        let htmlResult = this.convertParagraphs(markdownText);
        htmlResult = this.convertHeaders(htmlResult);
        htmlResult = this.convertLinks(htmlResult);
        htmlResult = this.cleanupHtml(htmlResult);
        
        return htmlResult;
    }
    
    /**
     * Converts all markdown that doesn't start with a header(#) to a HTML paragraph
     *  
     * @param {string} markdownText 
     * @returns {string} Existing string with converted HTML paragraphs
     */  
    static convertParagraphs(markdownText) {
        let regexParagraphPattern = new RegExp(`(^(?!#{1,6}\\s{1})).+`, 'gm')
        let html = markdownText.replace(regexParagraphPattern, `<p>$&</p>`);

        return html;
    }

    /**
     * Converts all markdown that starts with [1-6] md header tags(#) to the respective HTML header
     * 
     * @param {string} markdownText 
     * @returns {string} Existing string with converted HTML headers
     */
    static convertHeaders(markdownText) {
        for (var i = 6; i >= 1; i--) {
            let regexHeaderPattern = new RegExp(`^#{${i}}\\s{1}(.+)`, 'gm')
            markdownText = markdownText.replace(regexHeaderPattern, `<h${i}>$1</h${i}>`);
        }

        return markdownText;
    }

    /**
     * Converts all markdown that includes brackets, followed by text to a HTML link
     * 
     * @param {string} markdownText 
     * @returns {string} Existing string with converted HTML links
     */
    static convertLinks(markdownText) {
        let regexLinkPattern = new RegExp(`\\[(.*?)\\]\\((.*?)\\)`, 'gm')
        markdownText = markdownText.replace(regexLinkPattern, `<a href="$2">$1</a>`);

        return markdownText;
    }

    /**
     * Removes extra paragraph tags from links without text after open paragraph tags and before closed ones &
     * removes extra multiline paragraph tags to make just one paragraph.
     * 
     * @param {string} html 
     * @returns {string} Cleanup HTML string
     */
    static cleanupHtml(html) {
        let regexExtraParagraphPattern = new RegExp(`^\\<p\\>(<a.*?>.*?\\<\/a\\>)<\/p>.*?$`, 'gm')
        html = html.replace(regexExtraParagraphPattern, `$1`);

        let regexMultiParagraphPattern = new RegExp(`<\/p>([\r\n])<p>`, 'gm')
        html = html.replace(regexMultiParagraphPattern, `\n`);

        return html;
    }
}