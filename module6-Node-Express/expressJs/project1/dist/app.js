"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.use(express_1.default.text());
let userRouter = express_1.default.Router();
let courseRouter = express_1.default.Router();
app.use("/", userRouter);
app.use("/", courseRouter);
let logger = (req, res, next) => {
    console.log(req.url, req.method, req.hostname);
    next();
};
userRouter.post("/api/v1/create-user", (req, res) => {
    let user = req.body;
    console.log(user);
    res.json({
        message: "successfully create users",
        data: user
    });
});
courseRouter.get("/api/v1/course", (req, res) => {
    let course = req.body;
    console.log(course);
    res.json({
        message: "successfully added courses",
        data: course
    });
});
// error handling
userRouter.get("/api/v1/error", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(somthing);
    }
    catch (err) {
        console.log("error", err);
        res.status(400).json({
            success: false,
            mesaage: "not get data"
        });
    }
}));
// globar error handling 
userRouter.get("/api/v1/globalerror", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(somthing);
    }
    catch (err) {
        // console.log("error",err)
        // res.status(400).json({
        //   success:false,
        //   mesaage:"not get data"
        // })
        next(err);
    }
}));
// router use
app.get('/', logger, (req, res) => {
    // console.log("req",req?.body)
    //  console.log("res",res)
    res.send('Hello server running successfully done');
});
//params
app.get('/:id/:userId', (req, res) => {
    console.log(req.params.id);
    console.log(req.params.userId);
    res.send('Hello server running successfully done');
});
//query
app.get('/details', (req, res) => {
    console.log(req.query);
    res.send('Hello server running successfully done');
});
app.post("/", (req, res) => {
    console.log(req.body);
    res.json({
        message: "data sent successfully"
    });
});
// all error handler
// app.all("*", (req, res) => {
//   res.status(404).json({
//     status: false,
//     message: "not found"
//   });
// });
app.use((req, res) => {
    res.status(404).json({
        status: false,
        message: "not found"
    });
});
/// global error handler
app.use((err, req, res, next) => {
    if (err) {
        console.log(err);
        res.status(400).json({
            status: false,
            message: "soththing went wrong"
        });
    }
});
exports.default = app;
