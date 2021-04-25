async function display_value() {
    let value = document.getElementById('location').value;
    document.getElementById('result').value = await eel.get_value(value)()
}
jQuery('#button-show').on('click', function () {
    display_value();
})