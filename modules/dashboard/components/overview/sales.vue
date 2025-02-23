<template>
    <Card>
        <CardHeader>
            <CardTitle>Recent Sales</CardTitle>
            <CardDescription>You made 265 sales this month.</CardDescription>
        </CardHeader>

        <Separator orientation="horizontal" />

        <CardContent>
            <ScrollArea class="space-y-8 max-h-[328px]">
                <div v-for="(_, i) in 8" :key="i" class="flex py-4 items-center">
                    <div class="space-y-1">
                        <p class="text-sm font-medium leading-none">
                            Oli Martin
                        </p>
                        <p class="text-sm text-muted-foreground">
                            oli.martin@email.com
                        </p>
                    </div>
                    <div class="ml-auto font-medium">
                        +$1,999.00
                    </div>
                </div>
            </ScrollArea>
        </CardContent>
    </Card>
</template>
