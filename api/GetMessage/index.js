
const fs = require('fs');
const util = require('util');
const readFileAsync = util.promisify(fs.readFile);

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    let message;
    try {
        message = await readFileAsync('./GetMessage/content.txt');
    } catch (err) {
        context.log.error('ERROR', err);
        // This rethrown exception will be handled by the Functions Runtime and will only fail the individual invocation
        throw err;
    }

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: message
    };
}
// SIG // Begin signature block
// SIG // MIIFwwYJKoZIhvcNAQcCoIIFtDCCBbACAQExDzANBglg
// SIG // hkgBZQMEAgEFADB3BgorBgEEAYI3AgEEoGkwZzAyBgor
// SIG // BgEEAYI3AgEeMCQCAQEEEBDgyQbOONQRoqMAEEvTUJAC
// SIG // AQACAQACAQACAQACAQAwMTANBglghkgBZQMEAgEFAAQg
// SIG // IdB1XH8g9vw+hveqAU+3TlrKE///co56y4P4xFC59Oeg
// SIG // ggM6MIIDNjCCAh6gAwIBAgIQbkFYlRmcNrtPF7+sTlHY
// SIG // qDANBgkqhkiG9w0BAQsFADAkMSIwIAYDVQQDDBlUZXN0
// SIG // QXp1cmVFbmdCdWlsZENvZGVTaWduMB4XDTE5MTIxNjIz
// SIG // NTQwOVoXDTMwMDcxNzAwMDQwOVowJDEiMCAGA1UEAwwZ
// SIG // VGVzdEF6dXJlRW5nQnVpbGRDb2RlU2lnbjCCASIwDQYJ
// SIG // KoZIhvcNAQEBBQADggEPADCCAQoCggEBALdzomGcnPIf
// SIG // VrbQmes/YzjpYQizlnMPPcHRGLyQ36wob3hZtNcytONq
// SIG // LuTTmKihBw3TdvanCSA66hLWpyrzPSWY2orxRoxAOtxx
// SIG // rgC218L5jfwZbdpRYjNEIkkPEcnKeK2qcutBcKPWnFRI
// SIG // LCpiJe1mfW3RRmi4XWqdqMr6RKW04RzcmzJ1iEP/d4EI
// SIG // 8Bq9KBF+oWiGtyOMOQp6Mo+jDk+03mi+lpvbfWXrSH3o
// SIG // KYhIwfzc0pvMXYZmkdfEJXfb0Uc4dGUpulYegxLuc8Ox
// SIG // k7NfZnZ24ZkrKI8sY1imT/meC/ULzY8ZULKHSq6Nhv5n
// SIG // Cv3I/aHmkGg3wTPuZ/P6RAUCAwEAAaNkMGIwDgYDVR0P
// SIG // AQH/BAQDAgeAMBMGA1UdJQQMMAoGCCsGAQUFBwMDMBwG
// SIG // A1UdEQQVMBOCEXd3dy5taWNyb3NvZnQuY29tMB0GA1Ud
// SIG // DgQWBBQad2ypaosFSN3WN49F/B1fxJLrvzANBgkqhkiG
// SIG // 9w0BAQsFAAOCAQEAmSwp158iRcD7f/q+P5GMaqoK2i7r
// SIG // fmiJWxZqZ7kPlpWx4V7mkwKWqrfhIXxUaFmjOZL/Dact
// SIG // jdFQ1cIPXF8QCPmPc2yIAkFwMAVgBQmOdOs42pRFRVug
// SIG // SrXyPAfx59DPu33mV6qj8b30+GX2KLYMto4A6O7A7eT4
// SIG // YavNvoAuUdvlTKZ241BrqK/3ykKyJ7VfNKhLgnJrk/8e
// SIG // t0Wu8N9yp6wZcCO/LBuw3xuFAciHDnHFNHoW6cgLzpkd
// SIG // 0nbAcarkmHPmkpex1VxoTfUT2DTfQABGX0TuQpxX/PeN
// SIG // ry+iU/rlb+KO5Xk6JEokSP/KqBKFPhfO4oFpJ91QcvGb
// SIG // x+aOpTGCAeEwggHdAgEBMDgwJDEiMCAGA1UEAwwZVGVz
// SIG // dEF6dXJlRW5nQnVpbGRDb2RlU2lnbgIQbkFYlRmcNrtP
// SIG // F7+sTlHYqDANBglghkgBZQMEAgEFAKB8MBAGCisGAQQB
// SIG // gjcCAQwxAjAAMBkGCSqGSIb3DQEJAzEMBgorBgEEAYI3
// SIG // AgEEMBwGCisGAQQBgjcCAQsxDjAMBgorBgEEAYI3AgEV
// SIG // MC8GCSqGSIb3DQEJBDEiBCBE4VTA2U5tf/11vTceKcAX
// SIG // 6KZMiIC2+2PtG/ISzRHOwTANBgkqhkiG9w0BAQEFAASC
// SIG // AQBVvzftv14EJkjXSFf0jxt3COt05IRbXGOS5RnUKOku
// SIG // aF8lzI3+DnSRI6o/x0zfDQkCvysdWfLZOwPzO1JNq/Ww
// SIG // 7MBAKSIDDZtv8E11dA5xOvqST1WU8OvI2z3pxNmAHgj2
// SIG // HkQpabq85SRR8+qPqSmCw8K90xymXoq6Pb0tJTtIqAh/
// SIG // SvL5Mo3Nz7XxOPbGjFFTotcvT7YSxkdl3vTY5zvWl7Vd
// SIG // buu0ED77ouR40IONnCdckgufRdxpMPvhZd56pFmvxoT1
// SIG // VGqCDyqvALSMPB9iTuauX16mySX0+NuA/Ig+dVASzqEI
// SIG // 95OkTaYWXt4tW8TYqgxSDeoVRZZ0oz2vnewG
// SIG // End signature block
