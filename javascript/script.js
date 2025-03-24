document.querySelector('#search').addEventListener('submit', async (event) => {
    event.preventDefault();

    const cityName = document.querySelector('#city_name').value;

    if (!cityName) {
        return showAlert("Você precisa digitar o nome de uma cidade.");
    }

    const apiKey = 'ff2c719065ffec4dd4bf2f27c1caca4';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(cityName)}&appid=${apiKey}&units=metric&lang=pt_BR`;

    const results = await fetch(apiUrl);
    const json = await results.json();
});

function showAlert(msg) {
    document.querySelector('#alert').innerHTML = msg;
}
