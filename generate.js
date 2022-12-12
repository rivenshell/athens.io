import { Configuration, OpenAIApi } from "openai";
import { writeFileSync } from 'fs';
import { Buffer } from "buffer";

const configuration = new Configuration({
    apiKey: 'insert-here',
});

const openai = new OpenAIApi(configuration);

const prompt = 'sad portrait of cyberpunk girl hyperrealism'

const result = await openai.createImage({
    prompt,
    n: 2,
    size: "1024x1024",
    user: 'wheredidwegowrong89'
});

const url = result.data.data[0].url
console.log(url)

// This saves URL to disk
const imgResult = await fetch(url)
const blob = await imgResult.blob()
const buffer = Buffer.from(await blob.arrayBuffer())
writeFileSync(`./img/${Date.now()}.png`, buffer) 
