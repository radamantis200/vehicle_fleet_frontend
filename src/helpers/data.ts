const formatDate = (date: string) => {
    const dateCreated = new Date(date)
    const dateFormat = dateCreated.toLocaleDateString('es-BO', {
        timeZone: 'UTC',
    })

    return dateFormat
}

export default formatDate