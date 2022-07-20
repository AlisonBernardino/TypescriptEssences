// "Never" type && "Throw" command
// Note: We can use the "never" type on "infinite loops"
function sendError(errorMessage: string, errorCode: number): never{
    throw{errorA: errorMessage, errorID: errorCode}
}

sendError('Word typo error', 402);