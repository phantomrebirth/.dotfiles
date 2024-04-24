bluetoothctl

power on

scan on

pair [MAC_ADDRESS]

trust [MAC_ADDRESS]

connect [MAC_ADDRESS]

bluetoothctl

bluetoothctl devices

remove [MAC_ADDRESS]

exit

iwctl station wlan0 scan

iwctl station wlan0 connect SSID

ping google.com

nmcli connection show

nmcli connection delete <connection_name>

# the shit that actually works -->

nmcli device wifi connect "Orange-Ragnar" password "*#0011ahmed183" hidden yes
