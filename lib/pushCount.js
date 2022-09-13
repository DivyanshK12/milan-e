export const pushCount = async (date, hall, meal) => {
    const id = `${date.getDate()}_${date.getMonth()}_${date.getFullYear()}_${hall}_${meal}`
    const contentType = 'application/json'
    const body = {
        uid: id,
        meal: meal,
        hall: hall,
        date: date,
        count: 1,
    }; // need to get count and rating from db

    try {

        const resOld = await fetch(`/api/count/${id}`, { method: 'GET' })

        if (resOld.status === 200) {
            resOld.json().then((dataOld) => {
                body.count = dataOld.data.count + 1
            }).then(async () => {
                const res = await fetch(`/api/count/${id}`, {
                    method: 'PUT',
                    headers: {
                        Accept: contentType,
                        'Content-Type': contentType,
                    },
                    body: JSON.stringify(body), // need to override this json
                })

                // Throw error with status code in case Fetch API req failed
                if (!res.ok) {
                    throw new Error(res.status)
                }
            })

        } else if (resOld.status === 204) {
            const res = await fetch(`/api/count`, {
                method: 'POST',
                headers: {
                    Accept: contentType,
                    'Content-Type': contentType,
                },
                body: JSON.stringify(body), // need to override this json
            })
        } else {
            throw new Error(resOld.status)
        }
    } catch (error) {
        console.error(error)
    }
}