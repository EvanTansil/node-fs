import fs from "fs"
fs.unlink("./helloworld.txt", (err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log("Successfully deleted file.")
})
