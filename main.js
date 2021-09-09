window.onload = () => {
    console.log('Window Loaded!!!')
    const btn = document.getElementById('btnCalculator')
    btn.onclick = click

    function getInputValue(id) {
        const item = document.getElementById(id)
        return item.value
    }

    function click() {
        const operationType = getInputValue('operationType')
        const value1 = getInputValue('value1')
        const value2 = getInputValue('value2')
        const result = Mathematics[operationType](
            value1, value2
        )

        document.getElementById('result').innerText = `The Operation of ${operationType}, of ${value1} from ${value2} is: ${result}`
    }
}