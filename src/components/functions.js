import axios from "axios";
import bcrypt from "bcryptjs";

export function resetForm(vm) {
    vm.name = ''
    vm.email = ''
    vm.password = ''
    vm.confirmPassword = ''
    vm.$refs.name.focus()
}

export function checkEmpty(vm, val, valName, refName) {
    if (val === '') {
        alert('Enter the ' + valName)
        vm.$refs[refName].focus()
        return false
    }
    return true
}

export async function isEmailExists(email) {
    const res = await axios.get(`http://localhost:3000/users?email=${email}`)
    return res.data.length > 0
}

export async function hashPassword(password) {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
}

export function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
}

export function checkUserLoginStatus(vm) {
    let user = localStorage.getItem("user-info");
    if (!user) {
        vm.$router.push("/sign-in");
    }
}

export async function signUp(vm) {
    if (!checkEmpty(vm, vm.name, 'Name', 'name')) return
    if (!checkEmpty(vm, vm.email, "Email", "email")) return
    if (!validateEmail(vm.email)) {
        alert("Enter a valid Email")
        vm.$refs.email.focus()
        return
    }
    const exists = await isEmailExists(vm.email)
    if (exists) {
        alert("Email already exists")
        vm.$refs.email.focus()
        return
    }
    if (!checkEmpty(vm, vm.password, "Password", "password")) return
    if (vm.password.length < 6) {
        alert("Password must be 6 digits")
        vm.$refs.password.focus()
        return
    }
    if (!checkEmpty(vm, vm.confirmPassword, "Confirm Password", "confirm-password")) return
    if (vm.password !== vm.confirmPassword) {
        alert("Passwords don't match");
        vm.$refs['confirm-password'].focus()
        return
    }
    const hashedPassword = await hashPassword(vm.password)
    let result = await axios.post("http://localhost:3000/users", {
        name: vm.name,
        email: vm.email,
        password: hashedPassword
    })
    if (result.status === 201) {
        alert("User successfully created")
        localStorage.setItem("user-info", JSON.stringify(result.data))
        resetForm(vm)
        await vm.$router.push({name: 'HomeComponent'})

    } else {
        alert("Something went wrong")
    }
}

export async function signIn(vm) {
    if (!checkEmpty(vm, vm.email, "Email", "email")) return
    if (!validateEmail(vm.email)) {
        alert("Enter a valid Email")
        vm.$refs.email.focus()
        return
    }
    if (!checkEmpty(vm, vm.password, "Password", "password")) return
    const result = await axios.get(`http://localhost:3000/users?email=${vm.email}`)
    if (result.data.length === 0) {
        alert("Invalid Credentials")
        vm.$refs.password.focus()
    } else {
        let storedHash = result.data[0].password;
        let checkPassword = await bcrypt.compare(vm.password, storedHash);
        if (checkPassword) {
            alert("Welcome to Your Account")
            localStorage.setItem("user-info", JSON.stringify(result.data))
            await vm.$router.push("/")
        } else {
            alert("Invalid Credentials")
            vm.$refs.password.focus()
        }
    }

}

export function signOut(vm) {
    let con = confirm("Do you want to sign out?")
    if (con) {
        localStorage.removeItem("user-info")
        vm.isLogin = false
        vm.$router.push("/sign-in")
    }
}

export async function getUsers() {
    const res = await axios.get("http://localhost:3000/users")
    return res.data;
}

export async function addRestaurant(vm) {
    vm.name = vm.name.toLowerCase();
    vm.category = vm.category.toLowerCase();
    vm.description = vm.description.toLowerCase();
    if (!checkEmpty(vm, vm.name, 'Name', 'name')) return
    if (await checkExistingRestaurantsForSameUser(vm)) {
        alert("Restaurant name already exists");
        vm.$refs.name.focus()
        return;
    }
    if (!checkEmpty(vm, vm.category, 'Category', 'category')) return
    if (!checkEmpty(vm, vm.rating, 'Rating', 'rating')) return
    if (vm.rating < 0 || vm.rating > 5) {
        alert("Please enter a valid rating between 0 and 5")
        vm.$refs.rating.focus()
        return
    }
    if (!checkEmpty(vm, vm.description, 'Description', 'description')) return
    const userData = JSON.parse(localStorage.getItem("user-info"))

    const result = await axios.post("http://localhost:3000/restaurants", {
        name: vm.name,
        rating: vm.rating,
        category: vm.category,
        description: vm.description,
        user_id: userData.id,
    })
    if (result.status === 201) {
        alert("Restaurant successfully added")
        resetRestaurantForm(vm)
    }
}

export async function deleteRestaurant(restaurantId) {
    const con = confirm("Do to want to delete this restaurant?");
    if (con) {
        const result = await axios.delete(
            `http://localhost:3000/restaurants/${restaurantId}`
        )

        return result.status === 200 || result.status === 204
    }
}

export async function editRestaurant(vm) {
    vm.name = vm.name.toLowerCase();
    vm.category = vm.category.toLowerCase();
    vm.description = vm.description.toLowerCase();
    if (!checkEmpty(vm, vm.name, 'Name', 'name')) return
    const checkRestaurant = await checkExistingRestaurantsForSameUser(vm);
    console.log(checkRestaurant);
    if (checkRestaurant>1) {
        alert("Restaurant name already exists");
        vm.$refs.name.focus()
        return;
    }
    if (!checkEmpty(vm, vm.category, 'Category', 'category')) return
    if (!checkEmpty(vm, vm.rating, 'Rating', 'rating')) return
    if (vm.rating < 0 || vm.rating > 5) {
        alert("Please enter a valid rating between 0 and 5")
        vm.$refs.rating.focus()
        return
    }
    if (!checkEmpty(vm, vm.description, 'Description', 'description')) return

    const userData = JSON.parse(localStorage.getItem("user-info"))
    const result = await axios.put(
        `http://localhost:3000/restaurants/${vm.restaurantId}`,
        {
            name: vm.name,
            rating: vm.rating,
            category: vm.category,
            description: vm.description,
            user_id: userData.id,
        }
    );

    if (result.status === 200) {
        alert("Restaurant successfully updated");
    }
}

export async function getRestaurantForThisUser() {
    const userData = JSON.parse(localStorage.getItem("user-info"))
    const res = await axios.get(`http://localhost:3000/restaurants?user_id=${userData.id}`)
    return res.data;
}

export async function getTotalRestaurantByUserId(user_id) {
    const res = await axios.get(`http://localhost:3000/restaurants?user_id=${user_id}`)
    return res.data.length;
}

export async function getRestaurantById(res_id) {
    const res = await axios.get(`http://localhost:3000/restaurants?id=${res_id}`);
    return res;
}

export function resetRestaurantForm(vm) {
    vm.name = "";
    vm.category = "";
    vm.rating = null;
    vm.description = "";
}

export async function checkExistingRestaurantsForSameUser(vm) {
    const userData = JSON.parse(localStorage.getItem("user-info"))
    const result = await axios.get(`http://localhost:3000/restaurants?name=${vm.name}&user_id=${userData.id}`)
    return result.data.length;
}