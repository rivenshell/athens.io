import { Configuration, OpenAIApi } from "openai";
import { writeFileSync } from 'fs';
import { Buffer } from "buffer";

const configuration = new Configuration({
    apiKey: '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',
});

const openai = new OpenAIApi(configuration);

const prompt = 'a ship sailing through a river of fire in deep space'

const result = await openai.createImage({
    prompt,
    n: 1,
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