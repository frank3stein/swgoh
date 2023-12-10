import Link from "next/link";
// import { promises as fs } from 'fs';


// async function getCharacters() {
//   const file = await fs.readFile(process.cwd() + '/public/characters.json', 'utf8');
//   // const response = await fetch("/characters.json");
//   const {characters} = await JSON.parse(file);
//   return characters;
// }

export default async function Characters({characters}) { 
  // const character  = await getCharacters();
  console.log(characters[0].Title);
    return <>
    <Link href="/">Home</Link>
    <p>{characters[0].Title}</p>
    </>

  }