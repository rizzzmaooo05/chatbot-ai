import TelegramBot from "node-telegram-bot-api";
import axios from "axios";
import 'dotenv/config'


const token = process.env.TELEGRAM_BOT_API_TOKEN
const apiUrl = process.env.API_URL
const bot = new TelegramBot(token, {polling: true})

bot.on('message', async (response) => {
  const id = response.from.id
  const message = response.text

  const apiResponse = await axios.post(`${apiUrl}/chat`, {
    chatMessage: message
  })

  const answer = apiResponse.data.data
  bot.sendMessage(id, answer)
})


