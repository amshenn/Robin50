A “design document” for your project in the form of a Markdown file called DESIGN.md that discusses, technically, how you implemented your project and why you made the design decisions you did. Your design document should be at least several paragraphs in length. Whereas your documentation is meant to be a user’s manual, consider your design document your opportunity to give the staff a technical tour of your project underneath its hood.



Since the premise of our project was to create a modern looking interface for financial websites with some functionality for news, research, and notes pages, we decided to implement the industry standard modern web framwework called next.js, which is a React frammework. Next.js allows front-end developers to easily integrate modern web features by taking advantage of the large libraries that next.js has. As a result, we also took advantage and built our site with libraries to easily configure images, set up shading on our buttons and background, and configure navigation (for example, the icons found throughout our website are from React libraries).


In order to get functionality related to stocks and news, we decided to use a financial API (Alpha Vantage) and financial news API (News API). However, currently, we are limited to 25 API calls per day as we are on a free plan. 


