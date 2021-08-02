"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var app = express_1.default();
var port = process.env.PORT || 3000;
var de = __importStar(require("dotenv"));
var dotenv = de.config();
if (dotenv.error) {
    console.log(dotenv.error);
}
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use(cors_1.default());
// Test route
app.get('/', function (req, res) {
    res.send('Hello!');
});
// Main routes
app.use('/api/public', require('./routes/public'));
app.use('/api/user', require('./routes/profile'));
app.use('/api/shop', require('./routes/shop'));
app.use('/api/cart', require('./routes/cart'));
app.use('/api/order', require('./routes/order'));
var server = app.listen(port, function () {
    console.log("Server listening at http://localhost:" + port);
});
