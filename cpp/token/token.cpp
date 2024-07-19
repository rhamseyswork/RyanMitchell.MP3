#include "token.h"
#include <cstdlib>
#include <ctime>
#include <sstream>

GenerateToken::GenerateToken() {
    // Constructor definition (if needed)
    // Example: Initializing random seed
    srand(static_cast<unsigned int>(time(nullptr)));
}

std::string GenerateToken::generateToken(int length) {
    const std::string characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    std::stringstream ss;

    for (int i = 0; i < length; ++i) {
        int index = rand() % characters.size();
        ss << characters[index];
    }

    return ss.str();
}
