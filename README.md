### Hexlet tests and linter status:
[![Actions Status](https://github.com/Venzelland/frontend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/Venzelland/frontend-project-46/actions)

# Difference Generator

## **Description:**
Gendiff is a utility compares two configuration files and shows a difference.

## **How it works:**
The program defines a difference between structures of two files. Accepted extentions for input are yaml and json. Output formats are plain, JSON and stylish as default. For help type:
```bash
gendiff -h
```

## **Sistem requirements:**

  ***Ubuntu Linux,***
  ***Node.js v18.0.0***

## **Installation:**
1. Clone the project
2. Install dependencies

```bash
 npm ci,
 ```
 or
 ```bash
 make install
 ```
 ### **Usage:**
```
Usage: gendiff [options] <filepath1> <filepath2>

Compares two configuration files and shows a difference.

Options:
  -V, --version        output the version number
  -f, --format <type>  output format (default: "stylish")
  -h, --help           display help for command
```

# Example:
[![asciicast](https://asciinema.org/a/vT9ect2vacbaMiKhpmd2nCr5j.png)](https://asciinema.org/a/vT9ect2vacbaMiKhpmd2nCr5j)

  ## _Simple:_