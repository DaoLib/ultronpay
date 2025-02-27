// 网络配置
const NETWORKS = {
    LOCAL: {
        chainId: 31337, // Hardhat的默认chainId
        name: 'Hardhat Local',
        contractAddress: '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512', // 代理合约地址
        tokens: {
            NATIVE: {
                symbol: 'ETH',
                decimals: 18,
                address: '0x0000000000000000000000000000000000000000'
            },
            USDT: {
                symbol: 'USDT',
                decimals: 6,
                address: '0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9'
            },
            USDC: {
                symbol: 'USDC',
                decimals: 6,
                address: '0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9'
            }
        }
    },
    MAINNET: {
        chainId: 1,
        name: 'Ethereum Mainnet',
        contractAddress: '0x610178dA211FEF7D417bC0e6FeD39F05609AD788', // 使用实际部署的合约地址
        tokens: {
            NATIVE: {
                symbol: 'ETH',
                decimals: 18,
                address: '0x0000000000000000000000000000000000000000'
            },
            USDT: {
                symbol: 'USDT',
                decimals: 6,
                address: '0xdAC17F958D2ee523a2206206994597C13D831ec7'
            },
            USDC: {
                symbol: 'USDC',
                decimals: 6,
                address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'
            }
        }
    },
    BSC: {
        chainId: 56,
        name: 'BNB Smart Chain',
        contractAddress: '0x...', // BSC主网合约地址
        tokens: {
            NATIVE: {
                symbol: 'BNB',
                decimals: 18,
                address: '0x0000000000000000000000000000000000000000'
            },
            USDT: {
                symbol: 'USDT',
                decimals: 18,
                address: '0x55d398326f99059fF775485246999027B3197955'
            },
            USDC: {
                symbol: 'USDC',
                decimals: 18,
                address: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d'
            }
        }
    },
    ARBITRUM: {
        chainId: 42161,
        name: 'Arbitrum One',
        contractAddress: '0x...', // Arbitrum主网合约地址
        tokens: {
            NATIVE: {
                symbol: 'ETH',
                decimals: 18,
                address: '0x0000000000000000000000000000000000000000'
            },
            USDT: {
                symbol: 'USDT',
                decimals: 6,
                address: '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9'
            },
            USDC: {
                symbol: 'USDC',
                decimals: 6,
                address: '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8'
            }
        }
    },
    POLYGON: {
        chainId: 137,
        name: 'Polygon Mainnet',
        contractAddress: '0x...', // Polygon主网合约地址
        tokens: {
            NATIVE: {
                symbol: 'MATIC',
                decimals: 18,
                address: '0x0000000000000000000000000000000000000000'
            },
            USDT: {
                symbol: 'USDT',
                decimals: 6,
                address: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F'
            },
            USDC: {
                symbol: 'USDC',
                decimals: 6,
                address: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174'
            }
        }
    }
};

// 语言配置
const i18n = {
    zh: {
        errors: {
            // 系统错误
            NOT_INITIALIZED: "SDK未初始化",
            NO_PAYMENT_INFO: "未找到支付信息，请先调用fromURL方法初始化SDK",
            BROWSER_ONLY: "该方法只能在浏览器环境中使用",
            NO_PROVIDER: "未找到Web3提供者",
            NO_WALLET: "请安装MetaMask或其他Web3钱包",
            NO_SIGNER: "请先连接钱包",
            NETWORK_ERROR: "网络错误",
            
            // 参数错误
            INVALID_NETWORK: "不支持的网络",
            INVALID_TOKEN: "不支持的代币",
            INVALID_PARAMS: "支付参数无效",
            INVALID_AMOUNT: "无效的金额",
            INVALID_LANGUAGE: "不支持的语言",
            
            // 余额相关错误
            INSUFFICIENT_BALANCE: "余额不足",
            INSUFFICIENT_ALLOWANCE: "授权额度不足",
            
            // 交易错误
            TX_FAILED: "交易失败",
            APPROVAL_FAILED: "授权失败",
            PAYMENT_FAILED: "支付失败",
            
            // 合约错误
            CONTRACT_ERROR: "合约调用失败",
            
            // 其他错误
            UNKNOWN_ERROR: "未知错误"
        },
        contract: {
            // 合约错误映射
            AlreadyInitialized: "合约已初始化",
            ReentrancyGuard: "重入攻击保护",
            NotOwner: "需要管理员权限",
            ContractPaused: "合约已暂停",
            EmptyOrderId: "订单ID不能为空",
            OrderIdTooLong: "订单ID过长",
            InvalidAddress: "无效的地址",
            MerchantAlreadyRegistered: "商户已注册",
            MerchantNotRegistered: "商户未注册",
            NotMerchantOwner: "不是商户所有者",
            TokenNotSupported: "不支持的代币",
            InvalidAmount: "无效的金额",
            NotAMerchant: "不是商户",
            MerchantDisabled: "商户已禁用",
            InsufficientBalance: "余额不足",
            TransferFailed: "转账失败",
            CannotModifyNativeToken: "无法修改原生代币"
        },
        status: {
            REQUESTING_APPROVAL: "正在请求授权...",
            WAITING_APPROVAL: "等待授权确认...",
            APPROVAL_SUCCESS: "授权成功",
            PAYING: "正在支付...",
            PAYMENT_SUCCESS: "支付成功"
        }
    },
    en: {
        errors: {
            // System errors
            NOT_INITIALIZED: "SDK not initialized",
            NO_PAYMENT_INFO: "Payment information not found, please initialize SDK with fromURL method first",
            BROWSER_ONLY: "This method can only be used in browser environment",
            NO_PROVIDER: "Web3 provider not found",
            NO_WALLET: "Please install MetaMask or other Web3 wallet",
            NO_SIGNER: "Please connect wallet first",
            NETWORK_ERROR: "Network error",
            
            // Parameter errors
            INVALID_NETWORK: "Unsupported network",
            INVALID_TOKEN: "Unsupported token",
            INVALID_PARAMS: "Invalid payment parameters",
            INVALID_AMOUNT: "Invalid amount",
            INVALID_LANGUAGE: "Unsupported language",
            
            // Balance errors
            INSUFFICIENT_BALANCE: "Insufficient balance",
            INSUFFICIENT_ALLOWANCE: "Insufficient allowance",
            
            // Transaction errors
            TX_FAILED: "Transaction failed",
            APPROVAL_FAILED: "Approval failed",
            PAYMENT_FAILED: "Payment failed",
            
            // Contract errors
            CONTRACT_ERROR: "Contract call failed",
            
            // Other errors
            UNKNOWN_ERROR: "Unknown error"
        },
        contract: {
            // Contract error mapping
            AlreadyInitialized: "Contract already initialized",
            ReentrancyGuard: "Reentrancy guard",
            NotOwner: "Admin permission required",
            ContractPaused: "Contract is paused",
            EmptyOrderId: "Order ID cannot be empty",
            OrderIdTooLong: "Order ID too long",
            InvalidAddress: "Invalid address",
            MerchantAlreadyRegistered: "Merchant already registered",
            MerchantNotRegistered: "Merchant not registered",
            NotMerchantOwner: "Not merchant owner",
            TokenNotSupported: "Token not supported",
            InvalidAmount: "Invalid amount",
            NotAMerchant: "Not a merchant",
            MerchantDisabled: "Merchant is disabled",
            InsufficientBalance: "Insufficient balance",
            TransferFailed: "Transfer failed",
            CannotModifyNativeToken: "Cannot modify native token"
        },
        status: {
            REQUESTING_APPROVAL: "Requesting approval...",
            WAITING_APPROVAL: "Waiting for approval confirmation...",
            APPROVAL_SUCCESS: "Approval successful",
            PAYING: "Processing payment...",
            PAYMENT_SUCCESS: "Payment successful"
        }
    }
    // 可以继续添加其他语言...
};

class PaymentGatewaySDK {
    /**
     * @param {ethers.providers.Provider} provider - Web3提供者
     * @param {string} [network='LOCAL'] - 网络名称
     * @param {string} [language='zh'] - 语言设置
     */
    constructor(provider, network = 'LOCAL', language = 'zh') {
        // 确保i18n对象可用
        if (!i18n[language]) {
            language = 'zh'; // 默认使用中文
        }

        if (!NETWORKS[network]) {
            this._handleError(null, 'INVALID_NETWORK');
        }

        this.networkConfig = NETWORKS[network];
        this.provider = provider;
        this.contract = null;
        this.signer = null;
        this.language = language;
        this.i18n = i18n[language];
        
        this.abi = [
            // 管理功能
            "function owner() external view returns (address)",
            "function transferOwnership(address newOwner) external",
            "function pause() external",
            "function unpause() external",
            
            // 商户功能
            "function registerMerchant(address merchantAddress) external returns (uint256)",
            "function payById(string calldata orderId, uint256 merchantId, address token, uint256 amount) external payable",
            "function emergencyWithdraw(address token, address to, uint256 amount) external",
            "function getMerchantAddressById(uint256 merchantId) external view returns (address)",
            "function getMerchantIdByAddress(address wallet) external view returns (uint256)",
            "function transferMerchant(uint256 merchantId, address newWallet) external",
            "function withdraw(address token, uint256 amount) external",
            "function setMerchantStatus(uint256 merchantId, bool status) external",
            
            // 查询功能
            "function getMerchantInfo(uint256 merchantId) external view returns (bool isRegistered, bool isEnabled, address wallet)",
            "function getMerchantBalance(uint256 merchantId, address token) external view returns (uint256)",
            "function getMerchantBalances(uint256 merchantId, address[] calldata tokens) external view returns (uint256[])",
            "function getContractBalance(address token) external view returns (uint256)",
            "function isSupportedToken(address token) external view returns (bool)",
            "function addSupportedToken(address token, bool status) external",
            "function getWhitelistedTokens() external view returns (address[])",
            
            // 事件
            "event MerchantRegistered(uint256 indexed merchantId, address indexed wallet)",
            "event MerchantTransferred(uint256 indexed merchantId, address indexed oldWallet, address indexed newWallet)",
            "event PaymentReceived(string orderId, uint256 indexed merchantId, address indexed from, address token, uint256 amount, uint256 timestamp)",
            "event PaymentWithdrawn(uint256 indexed merchantId, address indexed token, uint256 amount)",
            "event MerchantStatusChanged(uint256 indexed merchantId, bool isEnabled)",
            "event TokenSupportUpdated(address indexed token, bool supported)",
            "event EmergencyWithdrawn(address token, address to, uint256 amount)"
        ];
    }

    // 错误处理工具方法
    _handleError(error, customCode = null) {
        console.log('处理错误:', { error, customCode });
        
        // 定义错误映射
        const errorMap = {
            NO_WALLET: this.i18n.errors.NO_WALLET,
            NO_SIGNER: this.i18n.errors.NO_SIGNER,
            NO_PAYMENT_INFO: this.i18n.errors.NO_PAYMENT_INFO,
            INSUFFICIENT_BALANCE: this.i18n.errors.INSUFFICIENT_BALANCE,
            APPROVAL_FAILED: this.i18n.errors.APPROVAL_FAILED,
            PAYMENT_FAILED: this.i18n.errors.PAYMENT_FAILED,
            INVALID_NETWORK: this.i18n.errors.INVALID_NETWORK
        };

        let errorMessage;
        
        if (customCode && errorMap[customCode]) {
            errorMessage = errorMap[customCode];
        } else if (error) {
            // 处理合约错误
            if (error.reason) {
                errorMessage = this._mapContractError(error);
            } else if (error.message && error.message.includes("user rejected")) {
                errorMessage = this.i18n.errors.USER_REJECTED;
            } else if (error.message) {
                errorMessage = error.message;
            } else {
                errorMessage = this.i18n.errors.UNKNOWN_ERROR;
            }
        } else {
            errorMessage = this.i18n.errors.UNKNOWN_ERROR;
        }

        // 打印详细错误信息到控制台
        console.error('错误详情:', {
            originalError: error,
            customCode,
            errorMessage
        });

        throw new Error(errorMessage);
    }

    // 将合约错误映射为用户友好的错误信息
    _mapContractError(contractError) {
        return this.i18n.contract[contractError] || this.i18n.errors.CONTRACT_ERROR;
    }

    // 初始化SDK
    async init(signer = null) {
        try {
            // 验证网络
            const network = await this.provider.getNetwork();
            if (network.chainId !== this.networkConfig.chainId) {
                throw new Error(this.i18n.errors.INVALID_NETWORK);
            }

            // 创建代理合约实例
            this.contract = new ethers.Contract(this.networkConfig.contractAddress, this.abi, this.provider);
            if (signer) {
                this.signer = signer;
                this.contract = this.contract.connect(signer);
            }
        } catch (error) {
            this._handleError(error);
        }
    }

    // 管理功能
    async getOwner() {
        try {
            return await this.contract.owner();
        } catch (error) {
            this._handleError(error);
        }
    }

    async transferOwnership(newOwner) {
        try {
            const tx = await this.contract.transferOwnership(newOwner);
            return await tx.wait();
        } catch (error) {
            this._handleError(error);
        }
    }

    async pause() {
        try {
            const tx = await this.contract.pause();
            return await tx.wait();
        } catch (error) {
            this._handleError(error);
        }
    }

    async unpause() {
        try {
            const tx = await this.contract.unpause();
            return await tx.wait();
        } catch (error) {
            this._handleError(error);
        }
    }

    // 紧急提款功能
    async emergencyWithdraw(tokenAddress, to, amount) {
        try {
            const tx = await this.contract.emergencyWithdraw(tokenAddress, to, amount);
            return await tx.wait();
        } catch (error) {
            this._handleError(error);
        }
    }

    // 商户功能
    async registerMerchant(merchantAddress) {
        try {
            const tx = await this.contract.registerMerchant(merchantAddress);
            const receipt = await tx.wait();
            const event = receipt.events.find(e => e.event === 'MerchantRegistered');
            return {
                merchantId: event.args.merchantId.toString(),
                wallet: event.args.wallet
            };
        } catch (error) {
            this._handleError(error);
        }
    }

    async getMerchantAddressById(merchantId) {
        try {
            return await this.contract.getMerchantAddressById(merchantId);
        } catch (error) {
            this._handleError(error);
        }
    }

    async getMerchantIdByAddress(wallet) {
        try {
            const merchantId = await this.contract.getMerchantIdByAddress(wallet);
            return merchantId.toString();
        } catch (error) {
            this._handleError(error);
        }
    }

    async transferMerchant(merchantId, newWallet) {
        const tx = await this.contract.transferMerchant(merchantId, newWallet);
        return await tx.wait();
    }

    async payById(orderId, merchantId, tokenAddress, amount, options = {}) {
        try {
            // 如果是原生代币支付，确保value字段正确设置
            if (tokenAddress === '0x0000000000000000000000000000000000000000') {
                // 确保amount是BigNumber类型
                amount = ethers.BigNumber.from(amount);
                options = { value: amount };
            } else if (options.value && options.value.gt(0)) {
                // 如果不是原生代币支付但发送了ETH，抛出错误
                this._handleError(null, 'INVALID_AMOUNT');
            }

            const tx = await this.contract.payById(
                orderId,
                merchantId,
                tokenAddress,
                amount,
                options
            );
            const receipt = await tx.wait();
            
            // 验证事件中的金额
            const event = receipt.events.find(e => e.event === 'PaymentReceived');
            if (!event) {
                this._handleError(null, 'TX_FAILED');
            }
            
            return receipt;
        } catch (error) {
            this._handleError(error);
        }
    }

    async withdraw(tokenAddress, amount) {
        const tx = await this.contract.withdraw(tokenAddress, amount);
        return await tx.wait();
    }

    async setMerchantStatus(merchantId, status) {
        const tx = await this.contract.setMerchantStatus(merchantId, status);
        return await tx.wait();
    }

    // 查询功能
    async getMerchantInfo(merchantId) {
        const info = await this.contract.getMerchantInfo(merchantId);
        return {
            isRegistered: info.isRegistered,
            isEnabled: info.isEnabled,
            wallet: info.wallet
        };
    }

    async getMerchantBalance(merchantId, tokenAddress) {
        const balance = await this.contract.getMerchantBalance(merchantId, tokenAddress);
        return balance.toString();
    }

    async getMerchantBalances(merchantId, tokenAddresses) {
        const balances = await this.contract.getMerchantBalances(merchantId, tokenAddresses);
        return balances.map(b => b.toString());
    }

    async getContractBalance(tokenAddress) {
        const balance = await this.contract.getContractBalance(tokenAddress);
        return balance.toString();
    }

    async isSupportedToken(tokenAddress) {
        return await this.contract.isSupportedToken(tokenAddress);
    }

    async getWhitelistedTokens() {
        try {
            return await this.contract.getWhitelistedTokens();
        } catch (error) {
            this._handleError(error);
        }
    }

    async addSupportedToken(tokenAddress, status) {
        const tx = await this.contract.addSupportedToken(tokenAddress, status);
        return await tx.wait();
    }

    // 工具方法
    formatAmount(amount, decimals = 18) {
        return ethers.utils.parseUnits(amount.toString(), decimals);
    }

    parseAmount(amount, decimals = 18) {
        return ethers.utils.formatUnits(amount, decimals);
    }

    /**
     * 获取代币配置信息
     * @param {string} symbol - 代币符号 (e.g., 'USDT', 'USDC')
     * @returns {Object} 代币配置信息
     */
    getTokenInfo(symbol) {
        const tokenInfo = this.networkConfig.tokens[symbol.toUpperCase()];
        if (!tokenInfo) {
            this._handleError(null, 'INVALID_TOKEN');
        }
        return tokenInfo;
    }

    /**
     * 获取当前网络信息
     * @returns {Object} 网络配置信息
     */
    getNetworkInfo() {
        return {
            name: this.networkConfig.name,
            chainId: this.networkConfig.chainId,
            contractAddress: this.networkConfig.contractAddress,
            supportedTokens: Object.keys(this.networkConfig.tokens)
        };
    }

    /**
     * 检查当前连接的网络是否正确
     * @returns {Promise<boolean>}
     */
    async validateNetwork() {
        const network = await this.provider.getNetwork();
        return network.chainId === this.networkConfig.chainId;
    }

    /**
     * 使用代币符号获取代币地址
     * @param {string} symbol - 代币符号
     * @returns {string} 代币合约地址
     */
    getTokenAddress(symbol) {
        return this.getTokenInfo(symbol).address;
    }

    /**
     * 使用代币符号获取代币精度
     * @param {string} symbol - 代币符号
     * @returns {number} 代币精度
     */
    getTokenDecimals(symbol) {
        return this.getTokenInfo(symbol).decimals;
    }

    /**
     * 格式化指定代币的金额
     * @param {string|number} amount - 金额
     * @param {string} symbol - 代币符号
     * @returns {ethers.BigNumber}
     */
    formatTokenAmount(amount, symbol) {
        const decimals = this.getTokenDecimals(symbol);
        return this.formatAmount(amount, decimals);
    }

    /**
     * 解析指定代币的金额
     * @param {ethers.BigNumber|string} amount - 金额
     * @param {string} symbol - 代币符号
     * @returns {string}
     */
    parseTokenAmount(amount, symbol) {
        const decimals = this.getTokenDecimals(symbol);
        return this.parseAmount(amount, decimals);
    }

    // 事件监听
    onPaymentReceived(callback) {
        this.contract.on('PaymentReceived', async (orderId, merchantId, from, token, amount, timestamp, event) => {
            try {
                // 从 topics 中获取 token 地址
                const tokenAddress = event.topics[3].slice(-40).toLowerCase();
                
                // 从 data 字段中提取金额
                const eventData = event.data;
                // amount在data中的位置是第二个32字节
                const amountHex = '0x' + eventData.slice(66, 130);
                const amountBN = ethers.BigNumber.from(amountHex);
                
                const payment = {
                    orderId,
                    merchantId: merchantId.toString(),
                    from,
                    token: tokenAddress,
                    amount: amountBN.toString(),
                    timestamp: timestamp.toString(),
                    transactionHash: event.transactionHash
                };
                
                callback(payment);
            } catch (error) {
                console.error('处理支付事件时出错:', error);
                this._handleError(error);
            }
        });
    }

    onPaymentWithdrawn(callback) {
        this.contract.on('PaymentWithdrawn', (merchantId, token, amount, event) => {
            callback({
                merchantId: merchantId.toString(),
                token,
                amount: amount.toString(),
                transactionHash: event.transactionHash
            });
        });
    }

    onMerchantRegistered(callback) {
        this.contract.on('MerchantRegistered', (merchantId, wallet, event) => {
            callback({
                merchantId: merchantId.toString(),
                wallet,
                transactionHash: event.transactionHash
            });
        });
    }

    onMerchantTransferred(callback) {
        this.contract.on('MerchantTransferred', (merchantId, oldWallet, newWallet, event) => {
            callback({
                merchantId: merchantId.toString(),
                oldWallet,
                newWallet,
                transactionHash: event.transactionHash
            });
        });
    }

    // 紧急提款事件监听
    onEmergencyWithdrawn(callback) {
        this.contract.on('EmergencyWithdrawn', (token, to, amount, event) => {
            callback({
                token,
                to,
                amount: amount.toString(),
                transactionHash: event.transactionHash
            });
        });
    }

    /**
     * 连接钱包（如MetaMask）
     * @returns {Promise<PaymentGatewaySDK>} 返回连接钱包后的SDK实例
     */
    async connectWallet() {
        if (typeof window === 'undefined' || !window.ethereum) {
            throw new Error(this.i18n.errors.NO_WALLET);
        }

        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            
            const network = await provider.getNetwork();
            const expectedChainId = this.networkConfig.chainId;
            
            if (network.chainId !== expectedChainId) {
                try {
                    await window.ethereum.request({
                        method: 'wallet_switchEthereumChain',
                        params: [{ chainId: '0x' + expectedChainId.toString(16) }],
                    });
                } catch (switchError) {
                    if (switchError.code === 4902) {
                        throw new Error(this.i18n.errors.NETWORK_ERROR);
                    }
                    this._handleError(switchError, 'NETWORK_ERROR');
                }
            }

            return this.connect(signer);
        } catch (error) {
            this._handleError(error, 'NO_WALLET');
        }
    }

    /**
     * 连接新的签名者
     * @param {ethers.Signer} signer - 新的签名者
     * @returns {PaymentGatewaySDK} 返回SDK实例
     */
    connect(signer) {
        const networkName = Object.keys(NETWORKS).find(key => NETWORKS[key] === this.networkConfig);
        const newSdk = new PaymentGatewaySDK(this.provider, networkName, this.language);
        newSdk.contract = new ethers.Contract(this.networkConfig.contractAddress, this.abi, signer);
        newSdk.signer = signer;
        // 保持支付信息
        newSdk.paymentInfo = this.paymentInfo;
        return newSdk;
    }

    /**
     * 监听网络变更
     * @param {Function} callback - 网络变更时的回调函数
     */
    onNetworkChanged(callback) {
        if (typeof window !== 'undefined' && window.ethereum) {
            window.ethereum.on('chainChanged', (chainId) => {
                callback(parseInt(chainId, 16));
            });
        }
    }

    /**
     * 监听账户变更
     * @param {Function} callback - 账户变更时的回调函数
     */
    onAccountsChanged(callback) {
        if (typeof window !== 'undefined' && window.ethereum) {
            window.ethereum.on('accountsChanged', (accounts) => {
                callback(accounts);
            });
        }
    }

    /**
     * 断开钱包连接
     */
    async disconnect() {
        this.signer = null;
        this.contract = this.contract.connect(this.provider);
        return this;
    }

    /**
     * 检查并处理支付前置条件（余额检查、授权等）
     * @param {string} orderId - 订单ID
     * @param {string} merchantId - 商户ID
     * @param {string} tokenSymbol - 代币符号
     * @param {string|number} amount - 支付金额
     * @param {Function} statusCallback - 状态回调函数，用于更新UI
     * @returns {Promise<void>}
     */
    async checkAndPreparePayment(orderId, merchantId, tokenSymbol, amount, statusCallback = () => {}) {
        if (!this.signer) {
            this._handleError(null, 'NO_SIGNER');
        }

        const tokenInfo = this.getTokenInfo(tokenSymbol);
        const tokenAddress = tokenInfo.address;
        const formattedAmount = this.formatTokenAmount(amount, tokenSymbol);
        const userAddress = await this.signer.getAddress();

        // 如果是ERC20代币
        if (tokenAddress !== ethers.constants.AddressZero) {
            const tokenContract = new ethers.Contract(
                tokenAddress,
                [
                    "function balanceOf(address account) view returns (uint256)",
                    "function allowance(address owner, address spender) view returns (uint256)",
                    "function approve(address spender, uint256 amount) returns (bool)",
                    "function decimals() view returns (uint8)",
                    "function symbol() view returns (string)"
                ],
                this.signer
            );

            try {
                // 检查余额
                const balance = await tokenContract.balanceOf(userAddress);
                if (balance.lt(formattedAmount)) {
                    console.log('余额不足:', {
                        balance: balance.toString(),
                        required: formattedAmount.toString(),
                        token: tokenSymbol
                    });
                    this._handleError(null, 'INSUFFICIENT_BALANCE');
                    return; // 确保在抛出错误后不继续执行
                }

                // 检查授权
                const allowance = await tokenContract.allowance(userAddress, this.networkConfig.contractAddress);
                if (allowance.lt(formattedAmount)) {
                    statusCallback(this.i18n.status.REQUESTING_APPROVAL);
                    try {
                        const approveTx = await tokenContract.approve(
                            this.networkConfig.contractAddress,
                            formattedAmount
                        );
                        statusCallback(this.i18n.status.WAITING_APPROVAL);
                        await approveTx.wait();
                        statusCallback(this.i18n.status.APPROVAL_SUCCESS);
                    } catch (error) {
                        this._handleError(error, 'APPROVAL_FAILED');
                        return; // 确保在抛出错误后不继续执行
                    }
                }
            } catch (error) {
                console.error('代币操作错误:', error);
                this._handleError(error);
                return; // 确保在抛出错误后不继续执行
            }
        } else {
            // 检查原生代币余额
            const balance = await this.provider.getBalance(userAddress);
            if (balance.lt(formattedAmount)) {
                console.log('原生代币余额不足:', {
                    balance: ethers.utils.formatEther(balance),
                    required: ethers.utils.formatEther(formattedAmount)
                });
                this._handleError(null, 'INSUFFICIENT_BALANCE');
                return; // 确保在抛出错误后不继续执行
            }
        }

        return {
            tokenAddress,
            formattedAmount
        };
    }

    /**
     * 从URL参数创建并初始化SDK实例
     * @param {Object} options - 初始化选项
     * @param {string} [options.language='zh'] - 语言设置 ('zh' 或 'en')
     * @returns {Promise<{sdk: PaymentGatewaySDK, paymentInfo: Object}>}
     */
    static async fromURL(options = { language: 'zh' }) {
        const language = options.language || 'zh';
        // 创建临时SDK实例以使用其错误处理系统
        const tempSdk = new PaymentGatewaySDK(null, 'LOCAL', language);

        // 确保在浏览器环境中运行
        if (typeof window === 'undefined') {
            tempSdk._handleError(null, 'BROWSER_ONLY');
        }

        // 解析URL参数
        const params = new URLSearchParams(window.location.search);
        const paymentInfo = {
            orderId: params.get('orderId'),
            merchantId: params.get('merchantId'),
            network: params.get('network') || 'LOCAL',
            token: params.get('token') || 'NATIVE',
            amount: params.get('amount') || '0'
        };

        // 验证参数
        if (!paymentInfo.orderId || !paymentInfo.merchantId || !paymentInfo.amount || 
            isNaN(paymentInfo.amount) || Number(paymentInfo.amount) <= 0) {
            tempSdk._handleError(null, 'INVALID_PARAMS');
        }

        // 验证网络和代币
        if (!NETWORKS[paymentInfo.network]) {
            tempSdk._handleError(null, 'INVALID_NETWORK');
        }

        const networkConfig = NETWORKS[paymentInfo.network];
        if (!networkConfig.tokens[paymentInfo.token]) {
            tempSdk._handleError(null, 'INVALID_TOKEN');
        }

        // 初始化SDK
        if (!window.ethereum) {
            tempSdk._handleError(null, 'NO_WALLET');
        }

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const network = await provider.getNetwork();
        const expectedChainId = networkConfig.chainId;

        // 如果当前网络不正确，尝试切换网络
        if (network.chainId !== expectedChainId) {
            try {
                await window.ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: '0x' + expectedChainId.toString(16) }],
                });
                // 重新创建provider，因为网络已经改变
                const newProvider = new ethers.providers.Web3Provider(window.ethereum);
                const sdk = new PaymentGatewaySDK(newProvider, paymentInfo.network, language);
                await sdk.init();

                // 格式化金额
                const tokenInfo = sdk.getTokenInfo(paymentInfo.token);
                const decimals = tokenInfo.decimals;
                const formattedAmount = ethers.utils.formatUnits(
                    ethers.utils.parseUnits(paymentInfo.amount.toString(), decimals),
                    decimals
                );
                paymentInfo.amount = formattedAmount;
                
                sdk.paymentInfo = paymentInfo;
                return { sdk, paymentInfo };
            } catch (error) {
                throw new Error(tempSdk.i18n.errors.NETWORK_ERROR);
            }
        }

        const sdk = new PaymentGatewaySDK(provider, paymentInfo.network, language);
        await sdk.init();

        // 格式化金额
        const tokenInfo = sdk.getTokenInfo(paymentInfo.token);
        const decimals = tokenInfo.decimals;
        const formattedAmount = ethers.utils.formatUnits(
            ethers.utils.parseUnits(paymentInfo.amount.toString(), decimals),
            decimals
        );
        paymentInfo.amount = formattedAmount;
        
        sdk.paymentInfo = paymentInfo;

        return {
            sdk,
            paymentInfo
        };
    }

    /**
     * 一键支付方法，包含所有必要的检查
     * @param {Function} statusCallback - 状态回调函数
     * @returns {Promise<ethers.providers.TransactionReceipt>}
     */
    async oneClickPay(statusCallback = () => {}) {
        if (!this.paymentInfo) {
            this._handleError(null, 'NO_PAYMENT_INFO');
        }

        const { orderId, merchantId, token, amount } = this.paymentInfo;

        // 确保已连接钱包
        if (!this.signer) {
            await this.connectWallet();
        }

        // 检查并准备支付
        const { tokenAddress, formattedAmount } = await this.checkAndPreparePayment(
            orderId,
            merchantId,
            token,
            amount,
            statusCallback
        );

        // 发起支付
        if (this.i18n && this.i18n.status) {
            statusCallback(this.i18n.status.PAYING);
        }
        try {
            const tx = await this.payById(
                orderId,
                merchantId,
                tokenAddress,
                formattedAmount
            );
            if (this.i18n && this.i18n.status) {
                statusCallback(this.i18n.status.PAYMENT_SUCCESS);
            }
            return tx;
        } catch (error) {
            this._handleError(error, 'PAYMENT_FAILED');
        }
    }

    /**
     * 设置SDK的语言
     * @param {string} language - 语言代码
     */
    setLanguage(language) {
        if (!i18n[language]) {
            throw new Error(this.i18n.errors.INVALID_LANGUAGE);
        }
        this.language = language;
        this.i18n = i18n[language];
    }

    /**
     * 获取当前语言设置
     * @returns {string} 当前语言代码
     */
    getLanguage() {
        return this.language;
    }

    /**
     * 获取支持的语言列表
     * @returns {string[]} 支持的语言代码列表
     */
    static getSupportedLanguages() {
        return Object.keys(i18n);
    }
}

// 浏览器环境下，将SDK暴露为全局变量
if (typeof window !== 'undefined') {
    window.PaymentGatewaySDK = PaymentGatewaySDK;
}

// CommonJS 模块系统
if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
        exports = module.exports = PaymentGatewaySDK;
    }
    exports.PaymentGatewaySDK = PaymentGatewaySDK;
} 