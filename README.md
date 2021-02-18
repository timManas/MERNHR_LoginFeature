# BackEnd Authentication Only

What you will need ?
- bcrypt  
- jsonwebtoken

Steps - Authentication 
1. Setup Controllers
2. Setup Authentication 
- Set up UserRoutes 
- Add userRoutes on server.js 
- set express to accept JSON raw data in the request body using (app.use(express.json()))
- Set up UserController (i.e findOne(email))
- set up matchPassword verification using bcrypt in userModel

3. Create JSON WebToken
- generate WebToken by signing it with JWT_SECRET
- Add WebToken in Controller
- Add token generation  to the res.json()

Steps - Authorization 
4. Create protective middleware in Routes
- Create authMiddleware

5. Decode & Verify the JWT 
  If Verified User, fetch the User Profile


Notes
- You will to Authenticate & Authorize Users
> Authenticaiton - Verify user credentials
> Authorization - Verify if user should be able to access data

- Sign the JWT with a secret Key
- You will need to 'verify' the JWT using 'verify' and JWT_SECRET
- You add the Bearer TOKEN in the request Header ...NOT the body
- You wiill need to seperate the logic in the routes and move to a controller instead
Ex: 
import {getProducts, getProductById} from './productController.js'
const router = express.Router()
router.route('/').get(getProducts)
router.route('/:id').get(getProductById)
- How to access the contents of the GET/POST request ?
> Use req.body.xyz (ex: req.body._id or req.body.email)
- app.use(express.json()) will allow us to use JSON data in the request body