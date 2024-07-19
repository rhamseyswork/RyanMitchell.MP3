#include "token.h"
#include <iostream>

int main() {
    GenerateToken generator;

    std::string token = generator.generateToken(10);
    std::cout << "Generated Token: " << token << std::endl;

    return 0;
}
