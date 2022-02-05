import { toByteArray } from 'base64-js';

export const STEVE_SKIN: ArrayBuffer = toByteArray("iVBORw0KGgoAAAANSUhEUgAAAEAAAAAgCAMAAACVQ462AAABI1BMVEX///////9VxsnAmIO3kHe3kHW3jXW4i3C1i3Wxi2+xhXWuhnBIqq2ognCufmqsfmalf2lFo6ameV5AmpyXdF8+lZeRcV6cbUyXbVOWbFCZa02WakyUZ06WZkuWZkqUZkmQYkaQYkVra2uKYUeJYEIye32DXD2EWz+CWj5MWsmBWD9+Vz+AVjl8VT1+VTZ7VTh1UDcoZWdwSjNvSjNxRjhMR4c+SKNqRzBoRS4kXV9lQzNeRDIiWFo0PIc/Pz9NMycrMXBNLCg/KxU9KxciKFo4KBYoKCgyJRQxJBMwIxIuIhMsIBItIA8tHxErHhAqHhIqHhAqHg8pHQ8oHA4nHA0nGw0nGwwmGw0mGg4lGg0lGgwkGA0jGAsjGAoiFwodEQwAAABM5QizAAAAAXRSTlMAQObYZgAAAl9JREFUeNqlkwtX0zAYhmHeUKI21gwQZfVSwNEhGYJa2oEKCsyOtIVuZAz8/7/Ctwk54nakuzxnZ3nb7X3OlzWbMiRJD6/eVf2aqVFJelEEQa/ue77njSOIIqkFv4E/uqAX5XuIkrEF6EoZTSJQfSP4OoZARqm8ygWKMQSpBEky8mPMMtlOj5rNX3F02pNx0mwepW2ZZeZcDCOQIo0P4zg+/PZdnB7GqZAQmHNRKBBdmYqzizR+eO/O/bvPfqYXZyKVXWHORfEEnZbI2uLYmrUeP59ZWDgW7Uy0Opk5F8WCLDu/XF06mJ3eejKzNW0dLK1enuOmPhdDCTrdk3Vn+dXTR77/YO7DsrN+0u1AoPpDCETW2pmvePW3rz+Cd7W6V5nfaWXCnItCgedVvEVnZfPT51ptY21tY3PlxeLLxQr+kBLUvalheA9+AHNdqitKX64x92mpRP1df7dY4CsGBCUwqYCi70+yhUHB3t7+3jbAkq+h67oBs2tztZptu8CmlBJCqc5ErQT8FezfEACXc5dSG31CkDklAAJEl1Bi416/QBfNytUXqM3Q5IBoqBIjFAoCzgN8bjO86cwIZVpgk9smQAgBD4KAsbzGWABUG9eO41QtUEWwwL+CMMQEWoAOZ0zXODJRF1QLypblVLXgv1vIS/kAVAk4V21IqlpQVoJy+YYA9D8FI0DmiFqgR4cAIjAoAEZAVIswnTXoaYHTJ2g0jKDReANc7rqMoU+1AFn9DE4uAA7It3JDoItmxVb2t3NCCPJDFoaUsXBbCdDEJEUCTKQNTGcEvDkAvXK1b4I/5xTh7KYhy4MAAAAASUVORK5CYII=")
export const ALEX_SKIN: ArrayBuffer = toByteArray("iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAA6lBMVEUAAADlmUfljT/YgDLckzzonUyqiV6ce1DfxqPr07Py2rrky6n7+/sjYiTy3cLu1rbv2bvy273u17nvu7FkQSwoKCh6tXeGh2FoRTB6r3fYupR5VT2AWkBtSjOMvop9snqBtX+LuohyTjZvTDWKi2aMjWh3r3WAglqHiWKPkGuGXkZ9tHrkyag7Ozt4VDxGRkZJSUlaWlpdXV1NTU1XV1fp0K/s1Ljky6phYWFra2vp0bPv2b3ly63v2r8YOBYaPxlPgEx3sHRSUlJjY2NKSkpQUFDy38jq1LhcXFw/Pz9wcHBISEhMTEx1UDg5NQK9AAAAAXRSTlMAQObYZgAAAypJREFUeNqczkd2A0EQw1ADU5RdbWXd/67K6wnY8z/+fANBnD79rE2EItO0e7QBoIIl0+730W7DgwpgbQeMmPrbCiAWyWagFPABPNsABBNTf59WXA9JRBRBxCAicRaQ71QK/GoJJjILJCIBqW6MGkxiWAJQkCqqqsf/P1CYYAziLFBAddf//jCOh/1/CYgIgcwDpvo4xuk8juNyHV0I0aCBWUBCj+PxMb/dxuhjl0hUAs4CSD8fjIfwdLoEEQP3dsujK3IYCMJkkA46eT0SNu2RTc5RRHvImf//d7Z6Ld56nmDiderSrcfU12qSCtebGkQR9Af6PsetWWh+WntNeRljlsXyQABodno+AMSDA5aWWj8CxLIYCCCkxHciXCEEgBobnaQrOtIRUZbFOBMD+Ffx358J/1jbFtMN2Yw/bsk2pxuj8ySBX0dFmuYxf3AVAMk/RWP476TdthbTY5sRf9laagJgLVKd1zXJDQOyNSHwa8CmNkQWAFzNEhdD3YAIs3XSBVgnWlubnsc6JibL9sxubG5utLZavjQBULG9XXDVEE8CIKP5HVzbA4hoFxJC+NIA7O3tRXp/X0doDiCDqRlc7DOQxYFP7JOSEUIK2QAcHh7uHR0fH+2hOTk9PWEAUY3gdTDd4kjwA3Am3LmTUjUB0MXl5QVXBsQQ0Tp7AOAeLQ5OOHEl5bW7KaW86gLs1YC9GlB1qs4tAOtEtx3uie5wuHXQlVKudE6p5g1OTu73jh4ejvbuT04en54esYGpqgreqmNwBVTmdJwrS6WeGfCsXroBr3yD1wbA8trWkuGeV0Bflq58flYl6nPXDd7e3l4f3t8fXtF8fH5+mBgm/QVpW8OIZd01AFjBecBEE0000Uh5Yd4/6yMDpufHBczwsz4GYCYeAsA5YSVNNNci48cFL7x/5WhmkOlw6iTJv/MCjPPTAAS5oBcg12nx/7nnXJAFuaDH/gDwBh4Q5ILeCvNCkAt6K8wLQS7orTAv8FwJghM+F/RWmBdgvL5iwM1AgDAv+FxQlwEAQV7g51ipq7oMAAjyQslO5AIQ1PNzT+vPeaEUiCQ+2vwE+AvPvqCUbKfGoQAAAABJRU5ErkJggg==");
export const EMPTY: ArrayBuffer = toByteArray("iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQIW2NgAAIAAAUAAR4f7BQAAAAASUVORK5CYII=")