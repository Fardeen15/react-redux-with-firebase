

export function Edit(payload) {
    console.log(payload)
    return {
        type: "Edit",
        payload
    }
}
function addInstore(payload) {
    return
}

export function Delete(payload) {
    return {
        type: "Delete",
        payload
    }
}


