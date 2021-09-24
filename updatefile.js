import fs, { appendFile } from "fs"

fs.rename("./HelloWorld.txt", "message.txt", (err   ) => {
    if (err) {
        console.log(err)
        return
    }
    console.log("Successfully renamed file.")
})
