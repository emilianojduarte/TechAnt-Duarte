const mockProducts = [
    {
        id: 1,
        type: 1,
        url: "/assets/images/ram1.jpg",
        enviogratis: false,
        recomendado: true,
        price: 3500,
        stock: 12,
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a ligula a dolor ornare tempus a non nulla. Praesent volutpat arcu eget metus rhoncus vestibulum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur erat ipsum, tempus ac aliquam molestie, iaculis vitae tortor. Aenean posuere finibus purus eu porta. In eu augue facilisis, volutpat metus quis, porta tellus. Quisque facilisis mattis venenatis. Curabitur non nisi risus. Morbi vitae tempor neque, quis bibendum ex. Morbi lorem ex, venenatis id felis a, tincidunt aliquam lorem. Proin hendrerit interdum diam ac accumsan. Fusce enim tellus, pharetra ac posuere at, interdum ac elit. Nullam ac libero dolor. Vivamus dictum vestibulum turpis, id condimentum risus malesuada id. Duis quis laoreet nulla. Morbi rhoncus tincidunt risus nec sollicitudin. Cras non sapien at metus elementum volutpat. Sed ante quam, pellentesque et lorem at, iaculis facilisis tortor. Nulla egestas pellentesque sem, ut gravida nibh ornare id. Etiam dictum posuere nunc id accumsan. Nulla facilisi. Donec porttitor quam non nisi egestas porta. Nullam ornare magna ac pulvinar dapibus. Proin elementum nibh urna, a pharetra neque pellentesque quis.",
        description: "1x4GB Kingston ValueRAM DDR3"
    },
    {
        id: 2,
        type: 1,
        url: "/assets/images/ram2.jpg",
        enviogratis: true,
        recomendado: false,
        price: 5499,
        stock: 15,
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a ligula a dolor ornare tempus a non nulla. Praesent volutpat arcu eget metus rhoncus vestibulum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur erat ipsum, tempus ac aliquam molestie, iaculis vitae tortor. Aenean posuere finibus purus eu porta. In eu augue facilisis, volutpat metus quis, porta tellus. Quisque facilisis mattis venenatis. Curabitur non nisi risus. Morbi vitae tempor neque, quis bibendum ex. Morbi lorem ex, venenatis id felis a, tincidunt aliquam lorem. Proin hendrerit interdum diam ac accumsan. Fusce enim tellus, pharetra ac posuere at, interdum ac elit. Nullam ac libero dolor. Vivamus dictum vestibulum turpis, id condimentum risus malesuada id. Duis quis laoreet nulla. Morbi rhoncus tincidunt risus nec sollicitudin. Cras non sapien at metus elementum volutpat. Sed ante quam, pellentesque et lorem at, iaculis facilisis tortor. Nulla egestas pellentesque sem, ut gravida nibh ornare id. Etiam dictum posuere nunc id accumsan. Nulla facilisi. Donec porttitor quam non nisi egestas porta. Nullam ornare magna ac pulvinar dapibus. Proin elementum nibh urna, a pharetra neque pellentesque quis.",
        description: "1x8GB Kingston Fury DDR4"
    },
    {
        id: 3,
        type: 1,
        url: "/assets/images/ram3.jpg",
        enviogratis: true,
        recomendado: true,
        price: 16108,
        stock: 16,
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a ligula a dolor ornare tempus a non nulla. Praesent volutpat arcu eget metus rhoncus vestibulum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur erat ipsum, tempus ac aliquam molestie, iaculis vitae tortor. Aenean posuere finibus purus eu porta. In eu augue facilisis, volutpat metus quis, porta tellus. Quisque facilisis mattis venenatis. Curabitur non nisi risus. Morbi vitae tempor neque, quis bibendum ex. Morbi lorem ex, venenatis id felis a, tincidunt aliquam lorem. Proin hendrerit interdum diam ac accumsan. Fusce enim tellus, pharetra ac posuere at, interdum ac elit. Nullam ac libero dolor. Vivamus dictum vestibulum turpis, id condimentum risus malesuada id. Duis quis laoreet nulla. Morbi rhoncus tincidunt risus nec sollicitudin. Cras non sapien at metus elementum volutpat. Sed ante quam, pellentesque et lorem at, iaculis facilisis tortor. Nulla egestas pellentesque sem, ut gravida nibh ornare id. Etiam dictum posuere nunc id accumsan. Nulla facilisi. Donec porttitor quam non nisi egestas porta. Nullam ornare magna ac pulvinar dapibus. Proin elementum nibh urna, a pharetra neque pellentesque quis.",
        description: "2x16GB Kingston Fury Beast DDR4"
    },
    {
        id: 4,
        type: 2,
        url: "/assets/images/i3.jpg",
        enviogratis: true,
        recomendado: true,
        price: 26950,
        stock: 7,
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a ligula a dolor ornare tempus a non nulla. Praesent volutpat arcu eget metus rhoncus vestibulum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur erat ipsum, tempus ac aliquam molestie, iaculis vitae tortor. Aenean posuere finibus purus eu porta. In eu augue facilisis, volutpat metus quis, porta tellus. Quisque facilisis mattis venenatis. Curabitur non nisi risus. Morbi vitae tempor neque, quis bibendum ex. Morbi lorem ex, venenatis id felis a, tincidunt aliquam lorem. Proin hendrerit interdum diam ac accumsan. Fusce enim tellus, pharetra ac posuere at, interdum ac elit. Nullam ac libero dolor. Vivamus dictum vestibulum turpis, id condimentum risus malesuada id. Duis quis laoreet nulla. Morbi rhoncus tincidunt risus nec sollicitudin. Cras non sapien at metus elementum volutpat. Sed ante quam, pellentesque et lorem at, iaculis facilisis tortor. Nulla egestas pellentesque sem, ut gravida nibh ornare id. Etiam dictum posuere nunc id accumsan. Nulla facilisi. Donec porttitor quam non nisi egestas porta. Nullam ornare magna ac pulvinar dapibus. Proin elementum nibh urna, a pharetra neque pellentesque quis.",
        description: "10ma Generación Intel i3"
    },
    {
        id: 5,
        type: 2,
        url: "/assets/images/i5.jpg",
        enviogratis: true,
        recomendado: true,
        price: 24999,
        stock: 8,
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a ligula a dolor ornare tempus a non nulla. Praesent volutpat arcu eget metus rhoncus vestibulum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur erat ipsum, tempus ac aliquam molestie, iaculis vitae tortor. Aenean posuere finibus purus eu porta. In eu augue facilisis, volutpat metus quis, porta tellus. Quisque facilisis mattis venenatis. Curabitur non nisi risus. Morbi vitae tempor neque, quis bibendum ex. Morbi lorem ex, venenatis id felis a, tincidunt aliquam lorem. Proin hendrerit interdum diam ac accumsan. Fusce enim tellus, pharetra ac posuere at, interdum ac elit. Nullam ac libero dolor. Vivamus dictum vestibulum turpis, id condimentum risus malesuada id. Duis quis laoreet nulla. Morbi rhoncus tincidunt risus nec sollicitudin. Cras non sapien at metus elementum volutpat. Sed ante quam, pellentesque et lorem at, iaculis facilisis tortor. Nulla egestas pellentesque sem, ut gravida nibh ornare id. Etiam dictum posuere nunc id accumsan. Nulla facilisi. Donec porttitor quam non nisi egestas porta. Nullam ornare magna ac pulvinar dapibus. Proin elementum nibh urna, a pharetra neque pellentesque quis.",
        description: "10ma Generación Intel i5"
    },
    {
        id: 6,
        type: 2,
        url: "/assets/images/i7.jpg",
        enviogratis: false,
        recomendado: true,
        price: 43399,
        stock: 5,
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a ligula a dolor ornare tempus a non nulla. Praesent volutpat arcu eget metus rhoncus vestibulum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur erat ipsum, tempus ac aliquam molestie, iaculis vitae tortor. Aenean posuere finibus purus eu porta. In eu augue facilisis, volutpat metus quis, porta tellus. Quisque facilisis mattis venenatis. Curabitur non nisi risus. Morbi vitae tempor neque, quis bibendum ex. Morbi lorem ex, venenatis id felis a, tincidunt aliquam lorem. Proin hendrerit interdum diam ac accumsan. Fusce enim tellus, pharetra ac posuere at, interdum ac elit. Nullam ac libero dolor. Vivamus dictum vestibulum turpis, id condimentum risus malesuada id. Duis quis laoreet nulla. Morbi rhoncus tincidunt risus nec sollicitudin. Cras non sapien at metus elementum volutpat. Sed ante quam, pellentesque et lorem at, iaculis facilisis tortor. Nulla egestas pellentesque sem, ut gravida nibh ornare id. Etiam dictum posuere nunc id accumsan. Nulla facilisi. Donec porttitor quam non nisi egestas porta. Nullam ornare magna ac pulvinar dapibus. Proin elementum nibh urna, a pharetra neque pellentesque quis.",
        description: "10ma Generación Intel i7"
    },
    {
        id: 7,
        type: 2,
        url: "/assets/images/i7.jpg",
        enviogratis: true,
        recomendado: false,
        price: 55900,
        stock: 3,
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a ligula a dolor ornare tempus a non nulla. Praesent volutpat arcu eget metus rhoncus vestibulum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur erat ipsum, tempus ac aliquam molestie, iaculis vitae tortor. Aenean posuere finibus purus eu porta. In eu augue facilisis, volutpat metus quis, porta tellus. Quisque facilisis mattis venenatis. Curabitur non nisi risus. Morbi vitae tempor neque, quis bibendum ex. Morbi lorem ex, venenatis id felis a, tincidunt aliquam lorem. Proin hendrerit interdum diam ac accumsan. Fusce enim tellus, pharetra ac posuere at, interdum ac elit. Nullam ac libero dolor. Vivamus dictum vestibulum turpis, id condimentum risus malesuada id. Duis quis laoreet nulla. Morbi rhoncus tincidunt risus nec sollicitudin. Cras non sapien at metus elementum volutpat. Sed ante quam, pellentesque et lorem at, iaculis facilisis tortor. Nulla egestas pellentesque sem, ut gravida nibh ornare id. Etiam dictum posuere nunc id accumsan. Nulla facilisi. Donec porttitor quam non nisi egestas porta. Nullam ornare magna ac pulvinar dapibus. Proin elementum nibh urna, a pharetra neque pellentesque quis.",
        description: "10ma Generación Intel i9"
    },
    {
        id: 8,
        type: 3,
        url: "/assets/images/r3.jpg",
        enviogratis: true,
        recomendado: false,
        price: 32662,
        stock: 10,
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a ligula a dolor ornare tempus a non nulla. Praesent volutpat arcu eget metus rhoncus vestibulum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur erat ipsum, tempus ac aliquam molestie, iaculis vitae tortor. Aenean posuere finibus purus eu porta. In eu augue facilisis, volutpat metus quis, porta tellus. Quisque facilisis mattis venenatis. Curabitur non nisi risus. Morbi vitae tempor neque, quis bibendum ex. Morbi lorem ex, venenatis id felis a, tincidunt aliquam lorem. Proin hendrerit interdum diam ac accumsan. Fusce enim tellus, pharetra ac posuere at, interdum ac elit. Nullam ac libero dolor. Vivamus dictum vestibulum turpis, id condimentum risus malesuada id. Duis quis laoreet nulla. Morbi rhoncus tincidunt risus nec sollicitudin. Cras non sapien at metus elementum volutpat. Sed ante quam, pellentesque et lorem at, iaculis facilisis tortor. Nulla egestas pellentesque sem, ut gravida nibh ornare id. Etiam dictum posuere nunc id accumsan. Nulla facilisi. Donec porttitor quam non nisi egestas porta. Nullam ornare magna ac pulvinar dapibus. Proin elementum nibh urna, a pharetra neque pellentesque quis.",
        description: "3ra Generación Ryzen 3"
    },
    {
        id: 9,
        type: 3,
        url: "/assets/images/r5.jpg",
        enviogratis: false,
        recomendado: true,
        price: 41999,
        stock: 9,
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a ligula a dolor ornare tempus a non nulla. Praesent volutpat arcu eget metus rhoncus vestibulum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur erat ipsum, tempus ac aliquam molestie, iaculis vitae tortor. Aenean posuere finibus purus eu porta. In eu augue facilisis, volutpat metus quis, porta tellus. Quisque facilisis mattis venenatis. Curabitur non nisi risus. Morbi vitae tempor neque, quis bibendum ex. Morbi lorem ex, venenatis id felis a, tincidunt aliquam lorem. Proin hendrerit interdum diam ac accumsan. Fusce enim tellus, pharetra ac posuere at, interdum ac elit. Nullam ac libero dolor. Vivamus dictum vestibulum turpis, id condimentum risus malesuada id. Duis quis laoreet nulla. Morbi rhoncus tincidunt risus nec sollicitudin. Cras non sapien at metus elementum volutpat. Sed ante quam, pellentesque et lorem at, iaculis facilisis tortor. Nulla egestas pellentesque sem, ut gravida nibh ornare id. Etiam dictum posuere nunc id accumsan. Nulla facilisi. Donec porttitor quam non nisi egestas porta. Nullam ornare magna ac pulvinar dapibus. Proin elementum nibh urna, a pharetra neque pellentesque quis.",
        description: "3ra Generación Ryzen 5"
    },
    {
        id: 10,
        type: 3,
        url: "/assets/images/r7.jpg",
        enviogratis: true,
        recomendado: true,
        price: 61722,
        stock: 8,
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a ligula a dolor ornare tempus a non nulla. Praesent volutpat arcu eget metus rhoncus vestibulum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur erat ipsum, tempus ac aliquam molestie, iaculis vitae tortor. Aenean posuere finibus purus eu porta. In eu augue facilisis, volutpat metus quis, porta tellus. Quisque facilisis mattis venenatis. Curabitur non nisi risus. Morbi vitae tempor neque, quis bibendum ex. Morbi lorem ex, venenatis id felis a, tincidunt aliquam lorem. Proin hendrerit interdum diam ac accumsan. Fusce enim tellus, pharetra ac posuere at, interdum ac elit. Nullam ac libero dolor. Vivamus dictum vestibulum turpis, id condimentum risus malesuada id. Duis quis laoreet nulla. Morbi rhoncus tincidunt risus nec sollicitudin. Cras non sapien at metus elementum volutpat. Sed ante quam, pellentesque et lorem at, iaculis facilisis tortor. Nulla egestas pellentesque sem, ut gravida nibh ornare id. Etiam dictum posuere nunc id accumsan. Nulla facilisi. Donec porttitor quam non nisi egestas porta. Nullam ornare magna ac pulvinar dapibus. Proin elementum nibh urna, a pharetra neque pellentesque quis.",
        description: "3ra Generación Ryzen 7"
    },
    {
        id: 11,
        type: 3,
        url: "/assets/images/r9.jpg",
        enviogratis: true,
        recomendado: false,
        price: 77400,
        stock: 7,
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a ligula a dolor ornare tempus a non nulla. Praesent volutpat arcu eget metus rhoncus vestibulum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur erat ipsum, tempus ac aliquam molestie, iaculis vitae tortor. Aenean posuere finibus purus eu porta. In eu augue facilisis, volutpat metus quis, porta tellus. Quisque facilisis mattis venenatis. Curabitur non nisi risus. Morbi vitae tempor neque, quis bibendum ex. Morbi lorem ex, venenatis id felis a, tincidunt aliquam lorem. Proin hendrerit interdum diam ac accumsan. Fusce enim tellus, pharetra ac posuere at, interdum ac elit. Nullam ac libero dolor. Vivamus dictum vestibulum turpis, id condimentum risus malesuada id. Duis quis laoreet nulla. Morbi rhoncus tincidunt risus nec sollicitudin. Cras non sapien at metus elementum volutpat. Sed ante quam, pellentesque et lorem at, iaculis facilisis tortor. Nulla egestas pellentesque sem, ut gravida nibh ornare id. Etiam dictum posuere nunc id accumsan. Nulla facilisi. Donec porttitor quam non nisi egestas porta. Nullam ornare magna ac pulvinar dapibus. Proin elementum nibh urna, a pharetra neque pellentesque quis.",
        description: "3ra Generación Ryzen 9"
    }
];

export default mockProducts;