function decode (s) {
    const AZ = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const az = 'abcdefghijklmnopqrstuvwxyz'
    //Generate numbers 65 to 90 and store in array
    const AZCODES = AZ.split('').map((letter, index) => {
        return {
            letter,
            code: index + 65
        }
    }
    )
    //Generate numbers 97 to 122 and store in array
    const azCODES = az.split('').map((letter, index) => {
        return {
            letter,
            code: index + 97
        }
    }
    )

    const spcCODE = {
        letter: ' ',
        code: 32
    }

    //reverse input string
    const reversed = s.split('').reverse().join('')

    console.log("reversed",reversed)

    //pick valid codes successively from reversed string, length 2 or 3
    const codes = []
    let k = 0
    for (let i = k; i < reversed.length-1; i++) {
        let code = reversed[i] + reversed[i + 1]
        console.log("code",code)
        if (code >= 65 && code <= 90) {
            codes.push(code)
            i=i+1
        } else if (code >= 97 && code <= 99) {
            codes.push(code)
            i=i+1
        } else if (code == 32) {
            codes.push(code)
            i=i+1
        } else if (code >=10&& code<=12){
            code = code + reversed[i + 2]
            console.log("new code",code)
            codes.push(code)
            i=i+2
        }
    }


    console.log("codes",codes)

    //convert codes to letters
    let letters = []
    for (let i = 0; i < codes.length; i++) {
        const code = codes[i]
        if (code >= 65 && code <= 90) {
            letters.push(AZCODES.find((item) => item.code == code).letter)
        } else if (code >= 97 && code <= 122) {
            letters.push(azCODES.find((item) => item.code == code).letter)
        } else if (code == 32) {
            letters.push(spcCODE.letter)
        }
    }

    console.log("letters",letters)
    
  



}

decode('7010117928411101701997927')