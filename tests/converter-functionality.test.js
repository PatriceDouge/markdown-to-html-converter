import MarkdownConverter from '../components/MarkdownConverter';

describe("Convert Markdown to HTML", () => {
    describe("when given a markdown heading 1", () => {
        it("should return a HTML header 1", () => {
            const testHeader = "# Header 1"
            const htmlString = MarkdownConverter.convertMarkdownToHtml(testHeader)
            expect(htmlString).toEqual('<h1>Header 1</h1>');
        });
    })

    describe("when given a markdown heading 2", () => {
        it("should return a HTML header 2", () => {
            const testHeader = "## Header 2"
            const htmlString = MarkdownConverter.convertMarkdownToHtml(testHeader)
            expect(htmlString).toEqual('<h2>Header 2</h2>');
        });
    })

    describe("when given a markdown heading 3", () => {
        it("should return a HTML header 3", () => {
            const testHeader = "### Header 3"
            const htmlString = MarkdownConverter.convertMarkdownToHtml(testHeader)
            expect(htmlString).toEqual('<h3>Header 3</h3>');
        });
    })

    describe("when given a markdown heading 4", () => {
        it("should return a HTML header 4", () => {
            const testHeader = "#### Header 4"
            const htmlString = MarkdownConverter.convertMarkdownToHtml(testHeader)
            expect(htmlString).toEqual('<h4>Header 4</h4>');
        });
    })

    describe("when given a markdown heading 5", () => {
        it("should return a HTML header 5", () => {
            const testHeader = "##### Header 5"
            const htmlString = MarkdownConverter.convertMarkdownToHtml(testHeader)
            expect(htmlString).toEqual('<h5>Header 5</h5>');
        });
    })

    describe("when given a markdown heading 6", () => {
        it("should return a HTML header 6", () => {
            const testHeader = "###### Header 6"
            const htmlString = MarkdownConverter.convertMarkdownToHtml(testHeader)
            expect(htmlString).toEqual('<h6>Header 6</h6>');
        });
    })

    describe("when given a markdown paragraph", () => {
        it("should return a HTML paragraph", () => {
            const testParagraph = "This is a paragraph"
            const htmlString = MarkdownConverter.convertMarkdownToHtml(testParagraph)
            expect(htmlString).toEqual('<p>This is a paragraph</p>');
        });
    })

    describe("when given a markdown link", () => {
        it("should return a HTML link", () => {
            const testLink = "[Link text](https://www.example.com)"
            const htmlString = MarkdownConverter.convertMarkdownToHtml(testLink)
            expect(htmlString).toEqual('<a href="https://www.example.com">Link text</a>');
        });
    })

    describe("when given a multiline markdown paragraph ", () => {
        it("should return a single paragraph", () => {
            const testParagraph = `How are you?
            What's going on?`

            const htmlString = MarkdownConverter.convertMarkdownToHtml(testParagraph)
            expect(htmlString).toEqual(`<p>How are you?
            What's going on?</p>`
            );
        });
    })
});