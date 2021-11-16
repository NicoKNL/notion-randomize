import { Client } from "@notionhq/client"

const notion = new Client({ auth: process.env.NOTION_KEY })

const databaseId = process.env.NOTION_DATABASE_ID

async function listItems() {
  try {
    const response = await notion.databases.query({
        database_id: databaseId
    })

    let pages = []
    response.results.forEach(e => pages.push(e.id))

    pages.forEach(async page_id => {
        await notion.pages.update({
            page_id: page_id,
            properties: {
                "random_number": {
                    number: Math.random()
                }
            }
        })
    })

  } catch (error) {
    console.error(error.body)
  }
}

listItems()