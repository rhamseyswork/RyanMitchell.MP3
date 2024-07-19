#include <iostream>
#include <fstream>   // For file operations
#include <dlfcn.h>   // For dynamic library loading
#include <vector>    // For in-memory storage

// Function to read a file into a vector of bytes
std::vector<char> readFile(const std::string& filename) {
    std::ifstream file(filename, std::ios::binary | std::ios::ate);
    if (!file.is_open()) {
        std::cerr << "Error: Failed to open file " << filename << std::endl;
        return {};
    }

    std::streamsize size = file.tellg();
    file.seekg(0, std::ios::beg);

    std::vector<char> buffer(size);
    if (!file.read(buffer.data(), size)) {
        std::cerr << "Error: Failed to read file " << filename << std::endl;
        return {};
    }

    file.close();
    return buffer;
}

int main(int argc, char* argv[]) {
    if (argc != 2) {
        std::cerr << "Usage: " << argv[0] << " <filename>" << std::endl;
        return 1;
    }

    std::string filename = argv[1];
    std::vector<char> fileData = readFile(filename);
    if (fileData.empty()) {
        return 1;
    }

    // Load the dynamic library libtoken.so
    void* handle = dlopen("./libtoken.so", RTLD_LAZY);
    if (!handle) {
        std::cerr << "Error: Failed to load libtoken.so." << std::endl;
        return 1;
    }

    // Example of using a function from libtoken.so
    typedef std::string (*GenerateTokenFunc)(int);
    GenerateTokenFunc generateToken = (GenerateTokenFunc)dlsym(handle, "generateToken");
    if (!generateToken) {
        std::cerr << "Error: Failed to find symbol generateToken in libtoken.so." << std::endl;
        dlclose(handle);
        return 1;
    }

    std::string token = generateToken(10); // Generate a token of length 10
    std::cout << "Generated Token: " << token << std::endl;

    dlclose(handle); // Close the library handle when done

    // Perform operations with fileData as needed

    return 0;
}
