export default function (str: string) {
  // Replace spaces with dashes
  let formattedStr = str.replace(/\s+/g, '-')
  // Convert to lowercase
  formattedStr = formattedStr.toLowerCase()
  // Remove special characters except dashes and alphanumeric characters
  formattedStr = formattedStr.replace(/[^a-z0-9-']/g, '')
  return formattedStr
}
