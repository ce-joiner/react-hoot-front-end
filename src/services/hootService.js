const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/hoots`;



// INDEX 

const index = async () => {
try {
    const res = await fetch(BASE_URL, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
});
return res.json();
} catch (error) {
    console.log(error);
}
};


// SHOW 

const show = async (hootId) => {
    try {
        const res = await fetch(`${BASE_URL}/${hootId}`, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        return res.json();
    } catch (error) {
        console.log(error);
    }
};


export { index, show };