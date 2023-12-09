

function Load_img() {

    const my_imgs = ["https://www.google.com/imgres?imgurl=https%3A%2F%2Fsadanduseless.b-cdn.net%2Fwp-content%2Fuploads%2F2022%2F03%2Fcursed-images9.jpg&tbnid=9tAHHDZJW6SdIM&vet=12ahUKEwiIr7aqmvGCAxX2ppUCHawjA6AQMygOegQIARBl..i&imgrefurl=https%3A%2F%2Fwww.sadanduseless.com%2Fcursed-images%2F&docid=GtW3hRl46vpf0M&w=660&h=821&q=cursed%20images&client=opera-gx&ved=2ahUKEwiIr7aqmvGCAxX2ppUCHawjA6AQMygOegQIARBl", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKhP-4VFZZgQPeK0qm8ALdcRxK2M8lKFn-IA&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyQDDoOCi2sXUTqb_sw3SzFUoI8Ksd8s490Q&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkXLPpz1Rj3X1vf2M29xTE9HKk93jHPAma4w&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX8JNJ3OPGPNy6Sdm4Wjj2uusVgLXn3rMsZQ&usqp=CAU"]

    return (
        <img src={my_imgs[Math.floor(Math.random() * my_imgs.length)]} alt="" width="400px" height="400px" />
    )
}

export default Load_img;