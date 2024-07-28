<template>
    <div class="bg">
        <div class="container">
            <div class="row justify-content-center align-items-center min-vh-100">
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="card shadow-lg p-4">
                        <div class="card-body">
                            <h3 class="card-title text-center mb-4">Login</h3>
                            <form @submit.prevent="handleLogin">
                                <div class="mb-3">
                                    <label for="email" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="email" v-model="email"
                                        aria-describedby="emailHelp">
                                </div>
                                <div class="mb-3">
                                    <label for="password" class="form-label">Password</label>
                                    <input type="password" class="form-control" id="password" v-model="password">
                                </div>
                                <div class="d-grid">
                                    <button type="submit" class="btn btn-primary btn-block">Login</button>
                                </div>
                                <div class="mt-3 text-center">
                                    <a href="#">Forgot password?</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        async handleLogin() {
            console.log('call handle login')
                if(this.email != '' && this.password != ''){
                    console.log('this is first if')
                    if(this.email ==='abc@gmail.com' && this.password === '1234'){
                            console.log('this is 2 nd if')
                            this.$router.push({ name: 'Dashboard' });
                    }else
                    {
                        alert('invalied login');
                    }
                    
                }else{
                    alert('input username and password')
                }
        }
    }
}
</script>


<style>
body,
html {
    height: 100%;
    margin: 0;
}

.bg {
    background-image: url('https://source.unsplash.com/random');
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
}

.card {
    background: rgba(255, 255, 255, 0.8);
}</style>