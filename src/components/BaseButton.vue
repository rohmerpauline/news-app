<template>
    <div>
        <button>
            <slot></slot>
        </button>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    button {
        background-color: #0540F2;
        border-radius: 5px;
        border : none;
        padding : 5px 10px 5px 10px;
    }

    a {
        text-decoration: none;
        color: white;
        font-size: 16px;
        font-weight: 700;
        font-family: 'Titillium Web', sans-serif;
        
    }

</style>