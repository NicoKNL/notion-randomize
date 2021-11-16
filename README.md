# Notion Randomize

Notion supports sorting, not shuffling. The - minimal - code presented in this repository uses the Notion API to assign random numbers to your database items, allowing you to sort on this random property.

The end result? 

The items in your boards/lists/tables will be ordered randomly every time you execute this code.

## Usage

1. Get a Notion API key and link it to your workspace. See: https://developers.notion.com/docs/getting-started
2. Get the Notion database ID of the database you want to randomize. See: https://stackoverflow.com/questions/67728038/where-to-find-database-id-for-my-database-in-notion
3. Add a `number` property to your database and name it `random_number`
4. Sort the view of your database on this `random_number` property
5. Download this repository
6. Install Node.js - https://nodejs.org/en/
7. Inside the repository folder:
   1. execute `npm install`
   2. Create `.env` 
   3. Inside `.env` add:
      1. `NOTION_KEY=your_notion_key_here`
      2. `NOTION_DATABASE_ID=your_database_id_here`
8. Execute `run.sh` to run the script and randomize the `random_number` property
9. Enjoy!

## Tips

Tired of the current order? Execute step 8 again!

Want to randomize the order on an interval? Create a cron job!


