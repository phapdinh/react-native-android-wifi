declare const wifi: {
    isEnabled: () => void;
    setEnabled: () => void;
    findAndConnect: () => void;
    disconnect: () => void;
    getSSID: () => void;
    getBSSID: () => void;
    loadWifiList: () => void;
    connectionStatus: () => void;
    getCurrentSignalStrength: () => void;
    getFrequency: () => void;
    getIP: () => void;
    getDhcpServerAddress: () => void;
    isRemoveWifiNetwork: () => void;
    reScanAndLoadWifiList: () => void;
    forceWifiUsage: () => void;
    connectionStatusOfBoundNetwork: () => void;
    connectToHiddenNetwork: () => void;
}

export default wifi;
