<script setup lang="ts">
import SearchInput from './search-input.vue';
import SwitchTheme from './switch-theme.vue';
</script>

<template>
    <div class="flex items-center justify-between gap-2 px-4">
        <SearchInput />
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Avatar class="h-8 flex items-center justify-center w-8">
                    <AvatarFallback class="text-sm">
                        M
                    </AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent class="min-w-60" align="end">
                <DropdownMenuLabel>
                    <div class="flex gap-2">
                        <Avatar class="h-8 bg-[#222222] w-8 rounded-lg">
                            <AvatarFallback>
                                MA
                            </AvatarFallback>
                        </Avatar>
                        <div class="grid flex-1 text-left text-sm leading-tight">
                            <span class="truncate font-semibold"> Mark </span>
                            <span class="truncate font-normal text-xs"> demo@gmail.com </span>
                        </div>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    Profile
                    <span class="ml-auto text-xs tracking-widest opacity-60">⇧⌘P</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    Billing
                    <span class="ml-auto text-xs tracking-widest opacity-60">⌘B</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    Settings
                    <span class="ml-auto text-xs tracking-widest opacity-60">⌘S</span>
                </DropdownMenuItem>
                <DropdownMenuItem>New Team</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    Log out
                    <span class="ml-auto text-xs tracking-widest opacity-60">⇧⌘Q</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

        <SwitchTheme />
    </div>
</template>
