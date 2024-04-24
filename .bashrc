#
# ~/.bashrc
#

# If not running interactively, don't do anything
[[ $- != *i* ]] && return

alias ls='ls --color=auto'
alias grep='grep --color=auto'
PS1='[\u@\h \W]\$ '
export PATH="$HOME/.local/bin:$PATH"
export QT_QPA_PLATFORM=wayland
export XDG_CURRENT_DESKTOP=hyprland
eval "$(starship init bash)"
localectl set-x11-keymap "" "" "" "numpad:mac"
