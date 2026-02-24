from playwright.sync_api import sync_playwright

# Replace these placeholders with the actual URLs from your assignment page!
URLS = [
    "URL_FOR_SEED_58",
    "URL_FOR_SEED_59",
    "URL_FOR_SEED_60",
    "URL_FOR_SEED_61",
    "URL_FOR_SEED_62",
    "URL_FOR_SEED_63",
    "URL_FOR_SEED_64",
    "URL_FOR_SEED_65",
    "URL_FOR_SEED_66",
    "URL_FOR_SEED_67"
]

def main():
    total_sum = 0
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        
        for url in URLS:
            print(f"Visiting {url}...")
            page.goto(url)
            
            # Extract and sum all numbers from table cells (td)
            page_sum = page.evaluate("""() => {
                let sum = 0;
                document.querySelectorAll('td').forEach(cell => {
                    let val = parseFloat(cell.innerText.trim());
                    if (!isNaN(val)) {
                        sum += val;
                    }
                });
                return sum;
            }""")
            
            print(f"Sum for this page: {page_sum}")
            total_sum += page_sum
            
        browser.close()
        
    print("=" * 20)
    print(f"TOTAL SUM: {total_sum}")
    print("=" * 20)

if __name__ == "__main__":
    main()
