import { Configuration, OpenAIApi } from "openai";
import { writeFileSync } from 'fs';
import { Buffer } from "buffer";

const configuration = new Configuration({
    apiKey: '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',
});

const openai = new OpenAIApi(configuration);

const prompt = 'rocket ship going warp speed through space'

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
