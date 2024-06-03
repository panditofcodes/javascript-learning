date = new Date()


days = ["Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday", "Sunday"]

console.log(`Today's day is :${days[date.getDay()-1]}`)

hours = date.getHours()
min = date.getMinutes()
sec = date.getSeconds()

if (hours > 12){
    c_hours = `${hours-12} PM`
} else {
    c_hours = `${hours} AM`
}

console.log(`Current Time: ${c_hours} : ${min} : ${sec}`)