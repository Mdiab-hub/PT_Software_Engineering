$(() => {
    ///////////
    //Year 1///
    ///////////

    const $container = $('#container')
    //console.log($container)
    const $h1 = $("<h1>Hogwarts<h1>")
    $container.append($h1)

    //////////////
    //Year 2/////
    ////////////

    const $h2 = $("<h2>Motasem<h2>")
    const $h3 = $("<h3>Gryffindor</h3>");
    const $pet_Nameh4 = $("<h4 class='cat'>Ace</h4>")
    let $h4 = $("<h4 class='wand'>Hornbeam Wand with Dragon Heartstring Core</h4>");
    $container.append($h2)
    $container.append($h3)
    $container.append($pet_Nameh4)
    $container.append($h4)

});

