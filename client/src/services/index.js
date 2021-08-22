// define API URL
export const baseURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_APP}/Table%201`

//define a config object that has authorization API key
export const config = {
  headers: {
  Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
  }
}