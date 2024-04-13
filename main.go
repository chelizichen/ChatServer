package main

import (
	"Sgrid/server/SubServer/ChatServer/src/routes"
	h "Sgrid/src/http"
	"Sgrid/src/public"
	"fmt"
)

func main() {
	ctx := h.NewSgridServerCtx(
		h.WithSgridServerType(public.PROTOCOL_HTTP),
		h.WithSgridGinStatic("/web"),
	)
	ctx.Use(routes.ServerRoutes)
	h.NewSgridServer(ctx, func(port string) {
		ctx.Engine.Run(port)
		fmt.Println("Server started on " + port)
	})
}
