const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      contacts: [],
    },
    actions: {
      createAgenda: async () => {
        try {
          const resCheck = await fetch("https://playground.4geeks.com/contact/agendas/agenda1/contacts");
          if (resCheck.ok) {
            console.log("La agenda ya existe, no es necesario crearla.");
            return;
          }

          const resCreate = await fetch("https://playground.4geeks.com/contact/agendas/agenda1", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
          });

          if (resCreate.ok) {
            console.log("Agenda creada correctamente.");
          } else {
            const errorMessage = await resCreate.text();
            console.error("Error al crear la agenda:", errorMessage);
          }
        } catch (error) {
          console.error("Error en createAgenda:", error);
        }
      },

      fetchContacts: async () => {
        try {
          const res = await fetch("https://playground.4geeks.com/contact/agendas/agenda1/contacts");
          if (!res.ok) throw new Error("Error al obtener los contactos.");
          const data = await res.json();
          setStore({ contacts: data.contacts || [] });
        } catch (error) {
          console.error("Error fetching contacts:", error);
        }
      },
    
    
      addContact: async (newContact) => {
        try {
          const res = await fetch(
            "https://playground.4geeks.com/contact/agendas/agenda1/contacts",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(newContact),
            }
          );

          if (res.ok) {
            getActions().fetchContacts();
          } else {
            console.error("Error al agregar contacto");
          }
        } catch (error) {
          console.error("Error en addContact:", error);
        }
      },
      updateContact: async (id, updatedContact) => {
        try {
          await fetch(`https://playground.4geeks.com/contact/agendas/agenda1/contacts/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedContact),
          });
          getActions().fetchContacts();
        } catch (error) {
          console.error("Error updating contact:", error);
        }
      },

      deleteContact: async (id) => {
        try {
          await fetch(`https://playground.4geeks.com/contact/agendas/agenda1/contacts/${id}`, {
            method: "DELETE",
          });
          getActions().fetchContacts();
        } catch (error) {
          console.error("Error deleting contact:", error);
        }
      },
    },
  };
};

export default getState;