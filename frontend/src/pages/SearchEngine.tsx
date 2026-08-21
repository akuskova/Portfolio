
export default function SearchEngine() {
    return (
        <div className="items-center justify-start text-center gap-6 p-8 pt-10 md:pt-60 flex flex-col max-w-3xl">
            <h1 className="text-5xl font-bold">Search Engine (Class Project)</h1>
            <p className="text-xl max-w-2xl">Scope: Built an end-to-end search engine over 56,000 web pages from ICS domains — indexer, ranking, and query interface — with strict memory and latency budgets.</p>
            <p className="text-xl max-w-2xl">Project Description: Designed a two-part system (indexer + retrieval service) that processes a multi-hundred-MB corpus, produces an inverted index with tf-idf ranking and important-tag weighting, and serves queries through a FastAPI backend. The index is written in sorted partial files that stream-merge with a k-way heap, and a byte-offset sidecar lets the retriever pull individual postings via seek() without ever loading the full index into RAM</p>
            <p className="text-xl max-w-2xl">Outcome: Sub-300 ms queries over 50k+ pages on a single laptop. Relevant top-5 results with URLs, no external search infrastructure.</p>
            <p className="text-xl max-w-2xl">Problem Solved: Search infrastructure typically means expensive tooling and heavy hardware. This project shows that a well-designed, disk-aware indexer can deliver responsive, high-quality search over tens of thousands of documents on commodity hardware — useful for internal knowledge bases, small crawls, or any team that wants search without adopting a full search platform.</p>
            <p className="text-xl max-w-2xl">Tech Stack: Python, BeautifulSoup, NLTK, FastAPI, JSONL, seek-based I/O</p>
        </div>
        )
}