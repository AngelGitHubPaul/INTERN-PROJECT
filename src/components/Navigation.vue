<template>
    <nav>
        <div class="nav-holder">
            <a href="" class="hover-link" >Trade</a>
            <a href="" class="hover-link">Earn</a>
            <a href="" class="hover-link">NFT</a>
            <a href="" class="hover-link">CrossChain</a>
        </div>
        <w3m-core-button>Connect Wallet</w3m-core-button>

    </nav>

</template>

<style scoped>

nav{
    display: flex;
    width: 100vw;
    height: 80px;
    background-color: rgba(127, 255, 212, 0.103);
    justify-content: end;
    padding-right: 4rem;
    place-items: center;
    gap: 50px;
}

nav .nav-holder{
    display: flex;
    gap: 50px;
}

.hover-link {
    font-weight: 500;
    font-size: large;
}

.hover-link:hover {
    color: whitesmoke;
    background-color: transparent;
}


</style>