set -e

if [! "$1"]; then
    printf "\nE necessario passar o ID da palestra\n"
fi

VER=`npm --version`

if [! $VER]; then
    apt install npm
fi

printf "\nGerando Qr Code\n"

npm run qrcode-generate -- --output=./qr_codes/qr_code_$1 "localhost:5000/confirmacao/$1" 

printf "\nQr Code da palestra $1 gerado na pasta ./qr_codes/\n"