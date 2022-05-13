const utils = {}

utils.formatDate = (current_datetime)=>{
    let formatted_date = current_datetime.getDate()  + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getFullYear() + " " + current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds();
    return formatted_date;
}

utils.response= (value) => {   
    if(value === "delete"){
        return JSON.stringify({message : "Has been deleted"})
    }
}

module.exports = utils