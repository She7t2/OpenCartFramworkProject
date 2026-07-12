import fs from  'fs' 

import {parse} from "csv-parse/sync"

export class dataProvider {
static getTestDataFromJosn(filePath :string )  : string { 
  const data : string    = JSON.parse(fs.readFileSync(filePath, "utf8")  ) 

  return data  ; 
}


static getDataFromCsv(filePath :string ) { 
 let data =    parse (fs.readFileSync (filePath), {columns : true , skip_empty_lines :   true})
 return data ; 
}
}